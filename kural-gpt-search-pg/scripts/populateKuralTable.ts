import kuralJson from "../data/kural.json";
import { getEmbedding, supabaseClient } from "./helper";

export async function populateKuralTable(): Promise<void> {
  for (const kural of kuralJson.kural) {
    const input = JSON.stringify(kural);
    const embedding = getEmbedding(input);

    await supabaseClient.from("kural").upsert({
      kural_number: kural.Number,
      kural_json: kural,
      oai_embedding: embedding,
    });
    console.log("inserted kural", kural.Number);
  }
}
