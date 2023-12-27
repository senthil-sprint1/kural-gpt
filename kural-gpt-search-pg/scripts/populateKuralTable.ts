import kurals from "../data/gpt/00_all_kurals.json";
import { cleanupString, getEmbedding, openAiInstance, supabaseClient } from "./helper";
import { KuralType } from "./types";

export async function populateKuralTable(): Promise<void> {
  for (const kural of kurals) {
    const input = formatKural(kural);
    const embedding = await getEmbedding(input);

    const response = await supabaseClient.from("kural").upsert(
      {
        kural_number: kural.number,
        kural_json: kural,
        oai_embedding: embedding,
        updated_on: new Date(),
      },
      { ignoreDuplicates: false, onConflict: "kural_number" }
    );
    console.log("inserted kural", kural.number, response);
  }

  function formatKural(kural: KuralType) {
    return `
    This is from the Thirukural, a collection of 1330 Tamil couplets (kurals) organized into 133 chapters (adikaaram) by the poet Thiruvalluvar in the 1st century BC.
    This is one specific kural from the collection.
    ----------------
    Thirukural Number: ${kural.number}
    Original Thirukural:
    ${kural.line1}
    ${kural.line2}
    Tamil Explanation:
    mv: ${kural.mv}
    sp: ${kural.sp}
    mk: ${kural.mk}
    English Translation:
    ${kural.translation}
    English Explanation:
    ${kural.gptExplanation}
      `;
  }
}

import fs from "fs";

export async function createGptExplanations(): Promise<void> {
  const kurals: KuralType[] = [];

  for (const kural of kurals) {
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
Kural ${kural.number}: 
${kural.line1}
${kural.line2}
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
      line1: kural.line1,
      line2: kural.line2,
      translation: kural.translation,
      explanation: kural.explanation,
      mk: kural.mk,
      mv: kural.mv,
      sp: kural.sp,
      number: kural.number,
      gptExplanation: explanation ?? "",
    };
    kurals.push(newKural);
    fs.writeFileSync(`./data/gpt/${newKural.number}.json`, JSON.stringify(newKural, null, 2));
    console.log("inserted kural", kural.number);
  }

  fs.writeFileSync(`./data/gpt/00_all_kurals.json`, JSON.stringify(kurals, null, 2));
}
