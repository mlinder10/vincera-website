"use server";

import { NextResponse } from "next/server";

export async function withTryCatch(fn: () => Promise<NextResponse>) {
  try {
    return await fn();
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
