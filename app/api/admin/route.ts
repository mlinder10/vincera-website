import { db } from "@/db/db";
import { adminToken } from "@/db/schema";
import { withTryCatch } from "@/lib/server-utils";
import { and, eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";

const postSchema = z.object({
  token: z.string().min(1),
});

export async function POST(req: NextRequest) {
  return await withTryCatch(async () => {
    const body = await req.json();
    const parsed = postSchema.safeParse(body);
    if (!parsed.success)
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });

    const token = parsed.data.token;
    const rows = await db
      .select()
      .from(adminToken)
      .where(
        and(eq(adminToken.token, token), eq(adminToken.is_consumed, false)),
      );

    if (!rows.length) {
      return NextResponse.json(
        { success: false, error: "Invalid token" },
        { status: 401 },
      );
    }

    await db
      .update(adminToken)
      .set({ is_consumed: true })
      .where(eq(adminToken.token, token));

    return NextResponse.json({ success: true });
  });
}
