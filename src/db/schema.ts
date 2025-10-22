import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

export const aiApps = sqliteTable('ai_apps', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  description: text('description').notNull(),
  iconName: text('icon_name').notNull(),
  status: text('status').notNull(),
  usageCount: integer('usage_count').notNull().default(0),
  category: text('category').notNull(),
  gradient: text('gradient').notNull(),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});