import { db } from "@/db/db";
import { sharedSplit } from "@/db/schema";
import { withTryCatch } from "@/lib/server-utils";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";
import { eq } from "drizzle-orm";

export async function GET(req: NextRequest) {
  return await withTryCatch(async () => {
    const id = req.nextUrl.searchParams.get("id");
    if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

    const [row] = await db
      .select()
      .from(sharedSplit)
      .where(eq(sharedSplit.id, id));
    if (!row)
      return NextResponse.json({ error: "Split not found" }, { status: 404 });

    return NextResponse.json(row);
  });
}

const postBodySchema = z.object({
  id: z.string(),
  version: z.number(),
  split: z.object(),
  exercises: z.array(z.object()),
});

export async function POST(req: NextRequest) {
  return await withTryCatch(async () => {
    const body = await req.json();
    const parsed = postBodySchema.safeParse(body);
    if (!parsed.success)
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });

    const { id, version, split, exercises } = parsed.data;
    await db.insert(sharedSplit).values({
      id,
      version,
      split: JSON.stringify(split),
      exercises: JSON.stringify(exercises),
    });
    return NextResponse.json({ success: true });
  });
}
