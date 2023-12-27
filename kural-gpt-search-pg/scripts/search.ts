import { getEmbedding, supabaseClient } from "./helper";
import { KuralTable } from "./types";

export async function search({
  query,
  maxResults = 10,
}: {
  query: string;
  maxResults?: number;
}): Promise<KuralTable[]> {
  const embedding = await getEmbedding(query);

  const { data: kurals } = await supabaseClient.rpc("search_kural", {
    query_embedding: embedding,
    match_threshold: 0.5,
    max_result_to_return: maxResults,
  });

  return kurals;
}
