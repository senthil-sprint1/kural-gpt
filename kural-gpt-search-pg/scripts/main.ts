import { updateExplanations } from "./populateKuralTable";
import { search } from "./search";

async function main(): Promise<void> {
  //await updateExplanations();
}

async function findMatchingKurals(): Promise<void> {
  const mom = "What makes a mom delightful?";
  const education = "What does thirukural say about being a student?";
  const educationTamil = "கல்வியை பற்றி திருக்குறள் என்ன சொல்கிறது?";
  const betrayal = "What does thirukural say about betrayal?";
  const grateful = "What does thirukural say about thanking?"; // 138
  const determination = "What does thirukural say about determination?"; // 666 determination and focus
  const notKilling = "What does thirukural say about killing?"; // 324 determination and focus
  const falsehood = "What does thirukural say about lying?"; // 292 determination and focus

  const matchingKurals = await search({ query: educationTamil });
  console.log(`Found ${matchingKurals.length}":`);
  for (const iKural of matchingKurals) {
    var kural = iKural.kural_json;

    console.log(`Kural ${kural.Number} \n ${kural.Line1} \n ${kural.Line2} \n ${kural.explanation} \n ${kural.mk} \n`);
  }
}

main();
