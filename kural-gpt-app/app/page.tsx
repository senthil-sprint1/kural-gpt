"use client";

import Kural from "@/src/components/Kural";

import { useFormState, useFormStatus } from "react-dom";
import { findMatchingKurals } from "./page.action";
import { Header } from "@/src/components/Header";
import { ReactNode, useEffect, useRef, useState } from "react";
import { KuralTable, KuralType } from "@/src/types/types";

export default function Home() {
  const [queries, setQueries] = useState<KuralQueryResultType[]>([]);
  function onNewQuery(kural: KuralQueryResultType) {
    if (kural.query) {
      const matching = queries.find((q) => q.query === kural.query);
      if (!matching) {
        setQueries((p) => [...p, kural]);
      }
    }
  }
  return (
    <>
      {queries.map((kural, index) => {
        return (
          <div key={`${index}-${kural.query}`}>
            <ChatContainer type="user">
              <div>{kural.query}</div>
            </ChatContainer>

            <ChatContainer type="kural-gpt">
              {kural.matchingKurals.map((k, index) => {
                return <KuralCard kural={k.kural_json} key={`${k.kural_json.number}-${index}`} />;
              })}
            </ChatContainer>
          </div>
        );
      })}
      <Ask onNewAsk={onNewQuery} />
    </>
  );
}

function KuralCard({ kural }: { kural: KuralType }) {
  return (
    <a href={`/kural/${kural.number}`} className="text-decoration-none ">
      <div className="card mb-3">
        <div className="card-body">
          <div className="d-flex">
            <div className="flex-grow-1">
              <div>{kural.line1}</div>
              <div>
                {kural.line2}{" "}
                <span className="text-muted" style={{ fontSize: ".75rem" }}>
                  ({kural.number})
                </span>
              </div>
              <div className="my-2">{kural.explanation}</div>
            </div>

            <div className="flex-flex-shrink-0 d-flex flex-column justify-content-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

function ChatContainer({ type, children }: { type: "user" | "kural-gpt"; children: ReactNode }) {
  return (
    <div className="d-flex my-2">
      <div className="flex-shrink-0">
        {type === "user" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            <path
              fillRule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
            />
          </svg>
        )}
        {type === "kural-gpt" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-android"
            viewBox="0 0 16 16"
          >
            <path d="M2.76 3.061a.5.5 0 0 1 .679.2l1.283 2.352A8.9 8.9 0 0 1 8 5a8.9 8.9 0 0 1 3.278.613l1.283-2.352a.5.5 0 1 1 .878.478l-1.252 2.295C14.475 7.266 16 9.477 16 12H0c0-2.523 1.525-4.734 3.813-5.966L2.56 3.74a.5.5 0 0 1 .2-.678ZM5 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2m6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
          </svg>
        )}
      </div>
      <div className="ms-2 flex-grow-1">
        <div className="d-inline-block  fw-bolder my-1">{type === "user" ? "You" : "Kural GPT"}</div>
        <div className=""> {children}</div>
      </div>
    </div>
  );
}

interface KuralQueryResultType {
  query: string;
  matchingKurals: KuralTable[];
}

function Ask({ onNewAsk }: { onNewAsk: (kural: KuralQueryResultType) => void }) {
  const [kurals, submitSearch] = useFormState(findMatchingKurals, { query: "", matchingKurals: [] });
  const { pending } = useFormStatus();

  const formRef = useRef<HTMLFormElement>(null);
  const textInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    onNewAsk(kurals);
  }, [kurals, onNewAsk]);

  return (
    <div className="container-fluid fixed-bottom bg-white shadow-lg p-4">
      <div className="container ">
        <QueryButtons />
        <form action={submitSearch} ref={formRef}>
          <div className="mb-3">{/* <QueryButtons /> */}</div>
          <div className="input-group ">
            <input
              type="text"
              className="form-control"
              name="query"
              style={{ padding: "1rem" }}
              ref={textInputRef}
              placeholder="What are you curious about Thiru Kural today?"
            />
            <button className="btn btn-outline-secondary" type="submit" aria-disabled={pending} disabled={pending}>
              Ask
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  function QueryButtons() {
    const queries = ["What makes a parent proud?"];
    return (
      <>
        {queries.map((q, i) => {
          return (
            <button
              className="btn btn-outline-secondary me-2"
              onClick={() => {
                textInputRef.current!.value = q;
                formRef.current!.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }));
              }}
              disabled={pending}
              key={`query-button-${i}-${q}`}
            >
              {q}
            </button>
          );
        })}
      </>
    );
  }
}
