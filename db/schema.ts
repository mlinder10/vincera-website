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

  fromDriver(value) {
    return value === 1;
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

export const featureGate = sqliteTable("feature_gate", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  analytics: customBoolean("analytics").default(true).notNull(),
  dataSharing: customBoolean("data_sharing").default(true).notNull(),
  exerciseHistory: customBoolean("exercise_history").default(true).notNull(),
  volumeRecommendation: customBoolean("volume_recommendation")
    .default(true)
    .notNull(),
  splitGeneration: customBoolean("split_generation").default(true).notNull(),
});
