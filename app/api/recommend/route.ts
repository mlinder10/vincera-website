import { prompt as promptGemini } from "@/lib/gemini";
import { withTryCatch } from "@/lib/server-utils";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";

const postBodySchema = z.object({
  exercise: z.string(),
  history: z.array(
    z.object({
      date: z.string(),
      rpe: z.int(),
      sets: z.array(
        z.object({
          weight: z.float64(),
          reps: z.float64(),
        }),
      ),
    }),
  ),
});

export async function POST(req: NextRequest) {
  return withTryCatch(async () => {
    const body = await req.json();
    const parsed = postBodySchema.safeParse(body);
    if (!parsed.success)
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });

    const prompt = `Given the following exercise and training history, please recommend training volume for the next workout.

    Exercise: ${JSON.stringify(parsed.data.exercise)}
    
    History: ${JSON.stringify(parsed.data.history)}

    Please respond in the following format with nothing else:
    {
      "explanation": <explanation>,
      "volume": { "weight": <weight>, "reps": <reps> }[]
    }`;

    const result = await promptGemini(prompt);
    if (!result) {
      return NextResponse.json(
        { error: "Failed to generate recommendation" },
        { status: 500 },
      );
    }

    return NextResponse.json(JSON.parse(result));
  });
}
