"use server";

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function prompt(prompt: string) {
  const interaction = await ai.interactions.create({
    model: "gemini-3.8-flash",
    input: prompt,
  });

  return interaction.output_text;
}

export async function embed(content: string) {
  const response = await ai.models.embedContent({
    model: "gemini-embedding-2",
    contents: `task: sentence similarity | query: ${content}`,
  });

  if (!response.embeddings) {
    return undefined;
  }

  const values = [];
  for (const embedding of response.embeddings) {
    if (!embedding.values) return undefined;
    values.push(...embedding.values);
  }

  return values;
}
