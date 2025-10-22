import { pgTable, serial, text, integer, timestamp } from 'drizzle-orm/pg-core';

export const aiApps = pgTable('ai_apps', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description').notNull(),
  iconName: text('icon_name').notNull(),
  status: text('status').notNull().default('active'),
  usageCount: integer('usage_count').notNull().default(0),
  category: text('category').notNull(),
  gradient: text('gradient').notNull(),
  createdAt: timestamp('created_at', { mode: 'date' }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { mode: 'date' }).notNull().defaultNow(),
});