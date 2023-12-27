import { getEmbedding, supabaseClient } from "./helper";

export async function search({ query }: { query: string }): Promise<KuralTable[]> {
  const embedding = await getEmbedding(query);

  const { data: kurals } = await supabaseClient.rpc("search_kural", {
    query_embedding: embedding,
    match_threshold: 0.5,
    max_result_to_return: 20,
  });

  return kurals;
}
