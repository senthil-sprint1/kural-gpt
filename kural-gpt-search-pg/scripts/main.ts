import { createGptExplanations, populateKuralTable } from "./populateKuralTable";
import { search } from "./search";

async function main(): Promise<void> {
  //await populateKuralTable();
  await findMatchingKurals();
}

async function findMatchingKurals(): Promise<void> {
  const prompts = [
    {
      query: "According to Thirukural, What are some thing delights a parent?",
      matchingKurals: [
        { id: 69, kural: "ஈன்ற பொழுதின் பெரிதுவக்கும் தன்மகனைச், சான்றோன் எனக்கேட்ட தாய்." },
        { id: 70, kural: "மகன்தந்தைக்கு ஆற்றும் உதவி இவன்தந்தை, என்நோற்றான் கொல் எனும் சொல்." },
        { id: 757, kural: "அருளென்னும் அன்பீன் குழவி பொருளென்னும், செல்வச் செவிலியால் உண்டு." },
      ],
    },
  ];
  const mom = "According to Thirukural, What are some thing delights a parent?"; //69
  const education = "What does thirukural say about being learning?";
  const educationTamil = "கல்வியை பற்றி திருக்குறள் என்ன சொல்கிறது?";
  const betrayal = "What does thirukural say about betrayal?";
  const grateful = "What does thirukural say about thanking?"; // 138
  const determination = "What does thirukural say about determination?"; // 666 determination and focus
  const notKilling = "What does thirukural say about killing?"; // 324 determination and focus
  const falsehood = "What does thirukural say about lying?"; // 292 determination and focus

  const matchingKurals = await search({ query: mom, maxResults: 100 });
  console.log(`Found ${matchingKurals.length}":`);
  for (const iKural of matchingKurals) {
    var kural = iKural.kural_json;

    console.log(
      `Kural ${kural.number} \n ${kural.line1} \n ${kural.line2} \n mk:${kural.mk} \n gpt:${kural.gptExplanation} \n`
    );
  }
}

main();
