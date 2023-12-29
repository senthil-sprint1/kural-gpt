import { getEmbedding, supabaseClient } from ".";
import { KuralTable } from "../types/types";

export async function search({
  query,
  maxResults = 10,
}: {
  query: string;
  maxResults?: number;
}): Promise<KuralTable[]> {
  const embedding = await getEmbedding(query);

  const { data: kurals } = await supabaseClient.rpc("search_kural", {
    //@ts-ignore - Supabase types is wrong, it should be number[]
    query_embedding: embedding,
    match_threshold: 0.5,
    max_result_to_return: maxResults,
  });

  //Supabase types is wrong, it should be KuralTable[]
  return kurals as unknown as KuralTable[];
}
