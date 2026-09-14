import { db } from "@/db/db";
import { featureGate } from "@/db/schema";
import { NextResponse } from "next/server";

export async function GET() {
  const defaultResponse = {
    analytics: true,
    dataSharing: true,
    exerciseHistory: true,
    volumeRecommendation: true,
    splitGeneration: true,
  };

  try {
    const [row] = await db.select().from(featureGate);
    if (!row) return NextResponse.json(defaultResponse);
    return NextResponse.json(row);
  } catch (error) {
    console.error(error);
    return NextResponse.json(defaultResponse);
  }
}
