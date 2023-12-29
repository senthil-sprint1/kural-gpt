"use client";

import Kural from "@/src/components/Kural";

import { useFormState } from "react-dom";
import { findMatchingKurals } from "./page.action";
export default function Home() {
  const [kurals, submitSearch] = useFormState(findMatchingKurals, { matchingKurals: [] });

  return (
    <div>
      <form action={submitSearch}>
        <textarea name="query" id="query" cols={30} rows={10}></textarea>
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
      {kurals.matchingKurals.map((kural, index) => {
        return <Kural kural={kural.kural_json} key={`${kural.kural_json.number}-${index}`} />;
      })}
    </div>
  );
}
