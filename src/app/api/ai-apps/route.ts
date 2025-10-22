import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { aiApps } from '@/db/schema';
import { eq, like, or, and, desc, sql } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');

    // Single record fetch
    if (id) {
      if (!id || isNaN(parseInt(id))) {
        return NextResponse.json(
          { error: 'Valid ID is required', code: 'INVALID_ID' },
          { status: 400 }
        );
      }

      const record = await db
        .select()
        .from(aiApps)
        .where(eq(aiApps.id, parseInt(id)))
        .limit(1);

      if (record.length === 0) {
        return NextResponse.json(
          { error: 'AI app not found', code: 'NOT_FOUND' },
          { status: 404 }
        );
      }

      return NextResponse.json(record[0], { status: 200 });
    }

    // List with filters
    const limit = Math.min(parseInt(searchParams.get('limit') ?? '10'), 100);
    const offset = parseInt(searchParams.get('offset') ?? '0');
    const search = searchParams.get('search');
    const status = searchParams.get('status');
    const category = searchParams.get('category');

    let query = db.select().from(aiApps);

    const conditions = [];

    // Search condition
    if (search) {
      conditions.push(
        or(
          sql`${aiApps.name} ILIKE ${`%${search}%`}`,
          sql`${aiApps.description} ILIKE ${`%${search}%`}`,
          sql`${aiApps.category} ILIKE ${`%${search}%`}`
        )
      );
    }

    // Status filter
    if (status) {
      conditions.push(eq(aiApps.status, status));
    }

    // Category filter
    if (category) {
      conditions.push(eq(aiApps.category, category));
    }

    // Apply all conditions
    if (conditions.length > 0) {
      query = query.where(and(...conditions));
    }

    const results = await query
      .orderBy(desc(aiApps.createdAt))
      .limit(limit)
      .offset(offset);

    return NextResponse.json(results, { status: 200 });
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + (error as Error).message },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Extract and trim fields
    const { name, description, iconName, status, category, gradient, usageCount } = body;

    // Validate required fields
    if (!name || typeof name !== 'string' || name.trim() === '') {
      return NextResponse.json(
        { error: 'Name is required and must be a non-empty string', code: 'MISSING_NAME' },
        { status: 400 }
      );
    }

    if (!description || typeof description !== 'string' || description.trim() === '') {
      return NextResponse.json(
        { error: 'Description is required and must be a non-empty string', code: 'MISSING_DESCRIPTION' },
        { status: 400 }
      );
    }

    if (!iconName || typeof iconName !== 'string' || iconName.trim() === '') {
      return NextResponse.json(
        { error: 'Icon name is required and must be a non-empty string', code: 'MISSING_ICON_NAME' },
        { status: 400 }
      );
    }

    if (!status || typeof status !== 'string' || status.trim() === '') {
      return NextResponse.json(
        { error: 'Status is required and must be a non-empty string', code: 'MISSING_STATUS' },
        { status: 400 }
      );
    }

    if (!category || typeof category !== 'string' || category.trim() === '') {
      return NextResponse.json(
        { error: 'Category is required and must be a non-empty string', code: 'MISSING_CATEGORY' },
        { status: 400 }
      );
    }

    if (!gradient || typeof gradient !== 'string' || gradient.trim() === '') {
      return NextResponse.json(
        { error: 'Gradient is required and must be a non-empty string', code: 'MISSING_GRADIENT' },
        { status: 400 }
      );
    }

    // Validate status value
    const trimmedStatus = status.trim();
    if (trimmedStatus !== 'active' && trimmedStatus !== 'inactive') {
      return NextResponse.json(
        { error: 'Status must be either "active" or "inactive"', code: 'INVALID_STATUS' },
        { status: 400 }
      );
    }

    // Prepare insert data - PostgreSQL handles timestamps automatically
    const insertData = {
      name: name.trim(),
      description: description.trim(),
      iconName: iconName.trim(),
      status: trimmedStatus,
      usageCount: typeof usageCount === 'number' ? usageCount : 0,
      category: category.trim(),
      gradient: gradient.trim(),
    };

    const newRecord = await db.insert(aiApps).values(insertData).returning();

    return NextResponse.json(newRecord[0], { status: 201 });
  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + (error as Error).message },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');

    // Validate ID
    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json(
        { error: 'Valid ID is required', code: 'INVALID_ID' },
        { status: 400 }
      );
    }

    const parsedId = parseInt(id);

    // Check if record exists
    const existing = await db
      .select()
      .from(aiApps)
      .where(eq(aiApps.id, parsedId))
      .limit(1);

    if (existing.length === 0) {
      return NextResponse.json(
        { error: 'AI app not found', code: 'NOT_FOUND' },
        { status: 404 }
      );
    }

    const body = await request.json();

    // Prepare update data - PostgreSQL handles updatedAt automatically
    const updates: Record<string, any> = {};

    // Validate and add fields if provided
    if (body.name !== undefined) {
      if (typeof body.name !== 'string' || body.name.trim() === '') {
        return NextResponse.json(
          { error: 'Name must be a non-empty string', code: 'INVALID_NAME' },
          { status: 400 }
        );
      }
      updates.name = body.name.trim();
    }

    if (body.description !== undefined) {
      if (typeof body.description !== 'string' || body.description.trim() === '') {
        return NextResponse.json(
          { error: 'Description must be a non-empty string', code: 'INVALID_DESCRIPTION' },
          { status: 400 }
        );
      }
      updates.description = body.description.trim();
    }

    if (body.iconName !== undefined) {
      if (typeof body.iconName !== 'string' || body.iconName.trim() === '') {
        return NextResponse.json(
          { error: 'Icon name must be a non-empty string', code: 'INVALID_ICON_NAME' },
          { status: 400 }
        );
      }
      updates.iconName = body.iconName.trim();
    }

    if (body.status !== undefined) {
      if (typeof body.status !== 'string' || body.status.trim() === '') {
        return NextResponse.json(
          { error: 'Status must be a non-empty string', code: 'INVALID_STATUS' },
          { status: 400 }
        );
      }
      const trimmedStatus = body.status.trim();
      if (trimmedStatus !== 'active' && trimmedStatus !== 'inactive') {
        return NextResponse.json(
          { error: 'Status must be either "active" or "inactive"', code: 'INVALID_STATUS_VALUE' },
          { status: 400 }
        );
      }
      updates.status = trimmedStatus;
    }

    if (body.usageCount !== undefined) {
      if (typeof body.usageCount !== 'number') {
        return NextResponse.json(
          { error: 'Usage count must be a number', code: 'INVALID_USAGE_COUNT' },
          { status: 400 }
        );
      }
      updates.usageCount = body.usageCount;
    }

    if (body.category !== undefined) {
      if (typeof body.category !== 'string' || body.category.trim() === '') {
        return NextResponse.json(
          { error: 'Category must be a non-empty string', code: 'INVALID_CATEGORY' },
          { status: 400 }
        );
      }
      updates.category = body.category.trim();
    }

    if (body.gradient !== undefined) {
      if (typeof body.gradient !== 'string' || body.gradient.trim() === '') {
        return NextResponse.json(
          { error: 'Gradient must be a non-empty string', code: 'INVALID_GRADIENT' },
          { status: 400 }
        );
      }
      updates.gradient = body.gradient.trim();
    }

    const updated = await db
      .update(aiApps)
      .set(updates)
      .where(eq(aiApps.id, parsedId))
      .returning();

    return NextResponse.json(updated[0], { status: 200 });
  } catch (error) {
    console.error('PUT error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + (error as Error).message },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');

    // Validate ID
    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json(
        { error: 'Valid ID is required', code: 'INVALID_ID' },
        { status: 400 }
      );
    }

    const parsedId = parseInt(id);

    // Check if record exists
    const existing = await db
      .select()
      .from(aiApps)
      .where(eq(aiApps.id, parsedId))
      .limit(1);

    if (existing.length === 0) {
      return NextResponse.json(
        { error: 'AI app not found', code: 'NOT_FOUND' },
        { status: 404 }
      );
    }

    const deleted = await db
      .delete(aiApps)
      .where(eq(aiApps.id, parsedId))
      .returning();

    return NextResponse.json(
      {
        message: 'AI app deleted successfully',
        id: parsedId,
        deleted: deleted[0],
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('DELETE error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + (error as Error).message },
      { status: 500 }
    );
  }
}