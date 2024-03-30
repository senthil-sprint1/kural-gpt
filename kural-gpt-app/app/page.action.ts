"use server";

import { search } from "@/src/helpers/search";

async function searchKural(query: string) {
  const matching = await search({ query, maxResults: 10 });
  return matching;
}

export async function findMatchingKurals(prevState: any, formData: FormData) {
  const query = formData.get("query") as string;
  const matchingKurals = await searchKural(query);
  return { query, matchingKurals };
}
