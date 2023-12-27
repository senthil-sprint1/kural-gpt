import kuralJson from "../data/kural.json";
import { cleanupString, getEmbedding, openAiInstance, supabaseClient } from "./helper";
import { KuralType } from "./types";

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

import fs from "fs";

export async function updateExplanations(): Promise<void> {
  const kurals: KuralType[] = [];

  for (const kural of kuralJson.kural) {
    const response = await openAiInstance.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: cleanupString(`
          The GPT is a Thiru Kural scholar, skilled in explaining the verses in simple and eloquent English. It specializes in providing insights, cultural context, and moral interpretations of the Thiru Kural verses presented to it.
          `),
        },
        {
          role: "user",
          content: `
          Write explanation in English for the following kural, 
___________
Kural ${kural.Number}: 
${kural.Line1}
${kural.Line2}
English Explination: 
${kural.explanation}
Tamil Explination(mk):
${kural.mk}
Tamil Explination(mv):
${kural.mv}
Tamil Explination(sp):
${kural.sp}
`,
        },
      ],
      temperature: 0.7,
      // max_tokens: 64,
      top_p: 1,
    });

    const explanation = response.choices[0].message.content;
    const newKural: KuralType = {
      line1: kural.Line1,
      line2: kural.Line2,
      translation: kural.Translation,
      explanation: kural.explanation,
      mk: kural.mk,
      mv: kural.mv,
      sp: kural.sp,
      number: kural.Number,
      gptExplanation: explanation ?? "",
    };
    kurals.push(newKural);
    fs.writeFileSync(`./data/gpt/${newKural.number}.json`, JSON.stringify(newKural, null, 2));
    console.log("inserted kural", kural.Number);
  }

  fs.writeFileSync(`./data/gpt/00_all_kurals.json`, JSON.stringify(kurals, null, 2));
}
