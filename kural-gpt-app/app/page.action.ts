"use server";

import { search } from "@/src/helpers/search";

export async function findMatchingKurals(prevState: any, formData: FormData) {
  const query = formData.get("query") as string;

  const matchingKurals = await search({ query, maxResults: 10 });
  const response = { query, matchingKurals };

  console.log("server", response);
  return response;
}
