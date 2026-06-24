import { db } from "@/db/db";
import { adminToken } from "@/db/schema";
import { and, eq } from "drizzle-orm";
import { NextRequest } from "next/server";
import z from "zod";

const postSchema = z.object({
  token: z.string().min(1),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = postSchema.safeParse(body);
    if (!parsed.success) {
      return new Response(
        JSON.stringify({ success: false, error: "Invalid request" }),
        {
          status: 400,
        },
      );
    }

    const token = parsed.data.token;
    const rows = await db
      .select()
      .from(adminToken)
      .where(
        and(eq(adminToken.token, token), eq(adminToken.is_consumed, false)),
      );

    if (!rows.length) {
      return new Response(
        JSON.stringify({ success: false, error: "Invalid token" }),
        {
          status: 401,
        },
      );
    }

    await db
      .update(adminToken)
      .set({ is_consumed: true })
      .where(eq(adminToken.token, token));

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ success: false, error: "Internal server error" }),
      {
        status: 500,
      },
    );
  }
}
