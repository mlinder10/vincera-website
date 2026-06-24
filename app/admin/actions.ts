"use server";

import { db } from "@/db/db";
import { adminToken } from "@/db/schema";

export async function login(token: string) {
  return token === process.env.ADMIN_LOGIN_TOKEN;
}

export async function createAdminToken(token: string) {
  await db.insert(adminToken).values({ token });
}
