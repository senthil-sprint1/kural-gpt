"use client";
import kurals from "@/public/kurals.json";
import { KuralCard } from "@/src/components/KuralCard";
import { useState, useEffect } from "react";
export default function Search() {
  const [query, setQuery] = useState("");
  const matching = getMatchingKurals(query);
  return (
    <div className="mt-4">
      <input
        type="text"
        className="form-control"
        placeholder="Search by any parts of kural or explanation or number..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="mt-3">
        {query && matching.length === 0 && <div className="text-center">Sorry, Couldn't find any match.</div>}
        {matching.map((k, index) => {
          return <KuralCard kural={k} key={`${k.number}-${index}`} />;
        })}
      </div>
    </div>
  );
}

function getMatchingKurals(query: string) {
  if (!query) {
    return [];
  }
  const isKuralNumber = tryGetNumber(query);
  const matchingKural = [];
  for (const kural of kurals) {
    if (isKuralNumber !== undefined) {
      if (tryGetNumber(query) === kural.number) matchingKural.push(kural);
    } else if (
      kural.line1.includes(query) ||
      kural.line2.toLowerCase().includes(query.toLowerCase()) ||
      kural.sp.toLowerCase().includes(query.toLowerCase()) ||
      kural.mk.toLowerCase().includes(query.toLowerCase()) ||
      kural.mv.toLowerCase().includes(query.toLowerCase()) ||
      kural.translation.toLowerCase().includes(query.toLowerCase()) ||
      kural.explanation.toLowerCase().includes(query.toLowerCase()) ||
      kural.gptExplanation.toLowerCase().includes(query.toLowerCase())
    ) {
      matchingKural.push(kural);
    }

    if (matchingKural.length >= 10) {
      return matchingKural;
    }
  }
  return matchingKural;
}

function tryGetNumber(query: string): number | undefined {
  if (isNumeric(query)) {
    return parseInt(query, 10);
  }
  return undefined;
}

const isNumeric = (num: any) =>
  (typeof num === "number" || (typeof num === "string" && num.trim() !== "")) && !isNaN(num as number);
