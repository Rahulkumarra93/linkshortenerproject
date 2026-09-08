import { pgTable, integer, text, varchar, timestamp, uniqueIndex } from 'drizzle-orm/pg-core';

export const links = pgTable(
  'links',
  {
    id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
    shortCode: varchar('short_code', { length: 32 }).notNull(),
    url: text('url').notNull(),
    // Clerk user id (e.g. "user_xxx"); not a local FK since Clerk owns identity.
    userId: text('user_id').notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
  },
  (table) => [uniqueIndex('links_short_code_idx').on(table.shortCode)],
);
