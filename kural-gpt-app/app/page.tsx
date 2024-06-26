"use client";

import s1Logo from "@/public/Sprint1-Logo-lt-bg.png";
import { useFormState, useFormStatus } from "react-dom";
import { findMatchingKurals } from "./page.action";
import { ReactNode, useEffect, useRef, useState } from "react";
import { KuralTable } from "@/src/types/types";
import { KuralCard } from "@/src/components/KuralCard";

export default function Home() {
  const [queries, setQueries] = useState<KuralQueryResultType[]>([]);
  const [currentQuery, setCurrentQuery] = useState<string>();

  function onNewQuery(kural: KuralQueryResultType) {
    if (kural.query) {
      const matching = queries.find((q) => q.query === kural.query);
      if (!matching) {
        setQueries((p) => [...p, { query: kural.query, matchingKurals: kural.matchingKurals || [] }]);
      }
    }
  }
  return (
    <>
      {queries.length === 0 && (
        <div
          style={{ height: "80vh" }}
          className="d-flex flex-column justify-content-center align-items-center text-center"
        >
          <h1 className="mt-3">Welcome to KuralGPT</h1>
          <h6 className="">
            This is an experiment to try latest LLM techniques on ancient Tamil literature{" "}
            <a href="https://en.wikipedia.org/wiki/Kural" target="_blank">
              {" "}
              Thirukural
            </a>
            .
          </h6>
          <p className="mt-4">
            You can ask questions like below and we try to find the relevant kurals for your query.{" "}
          </p>
          <QueryButtons onQuerySelected={(q) => setCurrentQuery(q)} pending={false} buttonJustification="center" />
          <div className="mt-4">
            <div className="text-center">
              <a href="https://www.sprint1.vc/" target="_blank">
                <img src={s1Logo.src} style={{ height: "5vh" }} />
              </a>
            </div>
            <div className="form-text">
              Proudly built by{" "}
              <a href="https://www.sprint1.vc/" target="_blank">
                Sprint1
              </a>{" "}
              in Milwaukee, WI
            </div>
          </div>
        </div>
      )}
      {queries.length > 0 && (
        <div>
          {queries.map((kural, index) => {
            return (
              <div key={`${index}-${kural.query}`}>
                <ChatContainer type="user" shouldScrollIntoView>
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

          <ChatContainer type="kural-gpt">
            <div className="my-2">Here are few more suggestions you can try...</div>
            <QueryButtons onQuerySelected={(q) => setCurrentQuery(q)} pending={false} />
          </ChatContainer>
        </div>
      )}

      <Ask onNewAsk={onNewQuery} query={currentQuery} />
    </>
  );
}

function ChatContainer({
  type,
  children,
  shouldScrollIntoView,
}: {
  type: "user" | "kural-gpt";
  children: ReactNode;
  shouldScrollIntoView?: boolean;
}) {
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (shouldScrollIntoView && divRef.current !== null) {
      divRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="d-flex my-2" ref={divRef}>
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

function Ask({ onNewAsk, query }: { onNewAsk: (kural: KuralQueryResultType) => void; query?: string }) {
  const [kurals, submitSearch] = useFormState(findMatchingKurals, {
    query: "",
    matchingKurals: [],
  });
  const { pending } = useFormStatus();

  const formRef = useRef<HTMLFormElement>(null);
  const textInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.body.style.paddingBottom = "7.5rem";
  }, []);

  useEffect(() => {
    textInputRef.current!.value = query ?? "";
    formRef.current!.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }));
    textInputRef.current!.value = "";
  }, [query]);

  useEffect(() => {
    onNewAsk(kurals);
  }, [kurals, onNewAsk]);

  return (
    <div className="container-fluid fixed-bottom bg-white shadow-lg p-3">
      <div className="container ">
        <form action={submitSearch} ref={formRef}>
          <div className="input-group ">
            <input
              type="text"
              className="form-control"
              name="query"
              style={{ padding: "0.75rem" }}
              ref={textInputRef}
              placeholder="What are you curious about Kural today?"
            />
            <button className="btn btn-outline-secondary" type="submit" aria-disabled={pending} disabled={pending}>
              Ask
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function QueryButtons({
  onQuerySelected,
  pending,
  buttonJustification = "start",
}: {
  buttonJustification?: "center" | "start";
  pending: boolean;
  onQuerySelected: (query: string) => void;
}) {
  const queries = [
    "What does Thirukural say about friendship?",
    "What does Thirukural say about love?",
    "What does Thirukural say about parenting?",
    "What makes parents proud?",
    "What does thirukural say about project managers?",
    "What makes someone a great leader?",
  ];
  return (
    <div className={`d-flex flex-wrap justify-content-${buttonJustification}`}>
      {queries.map((q, i) => {
        return (
          <button
            className="btn btn-outline-secondary m-2"
            onClick={() => {
              onQuerySelected(q);
            }}
            disabled={pending}
            key={`query-button-${i}-${q}`}
          >
            {q}
          </button>
        );
      })}
    </div>
  );
}
