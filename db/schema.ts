import { sql } from "drizzle-orm";
import {
  customType,
  integer,
  sqliteTable,
  text,
} from "drizzle-orm/sqlite-core";

const customBoolean = customType<{ data: boolean }>({
  dataType() {
    return "boolean";
  },
});

export const adminToken = sqliteTable("admin_token", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  token: text("token").notNull(),
  created_at: text("created_at")
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
  is_consumed: customBoolean("is_consumed").default(false).notNull(),
});

export const sharedSplit = sqliteTable("shared_split", {
  id: text("id").primaryKey(),
  version: integer("version").notNull(),
  split: text("split").notNull(),
  exercises: text("exercises").notNull(),
});
