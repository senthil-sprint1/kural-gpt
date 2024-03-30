"use client";

import Kural from "@/src/components/Kural";

import { useFormState } from "react-dom";
import { findMatchingKurals } from "./page.action";
import { Header } from "@/src/components/Header";
import { useRef } from "react";

export default function Home() {
  const [kurals, submitSearch] = useFormState(findMatchingKurals, { query: "", matchingKurals: [] });
  const ref = useRef<HTMLFormElement>(null);

  return (
    <main>
      <Header />
      <div className="container">
        {kurals.matchingKurals.map((kural, index) => {
          return <Kural kural={kural.kural_json} key={`${kural.kural_json.number}-${index}`} />;
        })}
      </div>
      <div className="container-fluid fixed-bottom bg-white shadow-lg p-4">
        <div className="container ">
          <form
            action={async (formData) => {
              await submitSearch(formData);
              ref.current?.reset();
            }}
            ref={ref}
          >
            <div className="input-group ">
              <input
                type="text"
                className="form-control"
                name="query"
                style={{ padding: "1rem" }}
                placeholder="What are you curious about Thiru Kural today?"
              />
              <button className="btn btn-outline-secondary" type="submit">
                Ask
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
