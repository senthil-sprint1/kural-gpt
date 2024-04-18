import { createClient } from "@supabase/supabase-js";
import { config } from "./config";
import OpenAI from "openai";
import { Database } from "../types/supabaseTypes";

export const supabaseClient = createClient<Database>(config.supabase.url, config.supabase.key!);

export const openAiInstance = new OpenAI({ apiKey: config.openAI.key });
export async function getEmbedding(input: string) {
  const embeddingResponse = await openAiInstance.embeddings.create({
    model: "text-embedding-ada-002",
    input: cleanupString(input),
  });
  const embedding = embeddingResponse.data[0].embedding;
  return embedding;
}

export function cleanupString(input: string) {
  // OpenAI recommends replacing newlines with spaces for best results
  // See https://supabase.com/blog/openai-embeddings-postgres-vector under "Generating embeddings" section
  const inputClean = input.replace(/\n/g, " ");
  return inputClean;
}
