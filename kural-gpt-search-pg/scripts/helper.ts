import { createClient } from "@supabase/supabase-js";
import { config } from "./config";
import OpenAI from "openai";

export const supabaseClient = createClient(config.supabase.url, config.supabase.key);

export const openAi = new OpenAI({ apiKey: config.openAI.key });
export async function getEmbedding(input: string) {
  // OpenAI recommends replacing newlines with spaces for best results
  // See https://supabase.com/blog/openai-embeddings-postgres-vector under "Generating embeddings" section
  const inputClean = input.replace(/\n/g, " ");

  const embeddingResponse = await openAi.embeddings.create({
    model: "text-embedding-ada-002",
    input: inputClean,
  });
  const embedding = embeddingResponse.data[0].embedding;
  return embedding;
}
