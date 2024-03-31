import kurals from "@/public/kurals.json";
import { meta } from "./kural-meta";
import "./style.css";
export default function Page({ params }: { params: { slug: string } }) {
  const matchingKural = tryFindMatchingKural(params.slug);
  const navLinks = getNavLinks(matchingKural?.kuralInfo?.number);
  return (
    <div className="row justify-content-md-center">
      <div className="col-lg-9">
        {!matchingKural && <div> This is not a valid URL. You might have copied the partial URL. Try again. </div>}
        {matchingKural && (
          <div className="mt-4">
            <div className="">{matchingKural.kuralInfo.line1}</div>
            <div>
              {matchingKural.kuralInfo.line2} <span className="ms-2 form-text">{matchingKural.kuralInfo.number}</span>
            </div>
            <div className="mt-2 text-muted fst-italic">{matchingKural.kuralInfo.translation}</div>

            <div className="mt-3">
              <span className="badge rounded-pill text-bg-info me-2">{matchingKural.meta?.pal.name}</span>
              <span className="badge rounded-pill text-bg-success me-2">{matchingKural.meta?.iyal.name}</span>
              <span className="badge rounded-pill text-bg-warning me-2">{matchingKural.meta?.athigaram.name}</span>

              {navLinks.prev && (
                <a
                  href={`/kural/${navLinks.prev}`}
                  title="Go to previous"
                  className="btn btn-primary kural-nav-btn me-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                    />
                  </svg>
                </a>
              )}
              {navLinks.next && (
                <a href={`/kural/${navLinks.next}`} title="Go to next" className="btn btn-primary kural-nav-btn me-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                    />
                  </svg>
                </a>
              )}

              <a href={`/kural/${getRandomKuralNumber()}`} className="btn btn-primary kural-nav-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-shuffle"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.6 9.6 0 0 0 7.556 8a9.6 9.6 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.6 10.6 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.6 9.6 0 0 0 6.444 8a9.6 9.6 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5"
                  />
                  <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192m0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192" />
                </svg>
              </a>
            </div>
            <div className="my-4 border border-dark" />

            <Explanation who="சாலமன் பாப்பையா" explanation={matchingKural.kuralInfo.sp} />
            <Explanation who="மு.கருணாநிதி" explanation={matchingKural.kuralInfo.mk} />
            <Explanation who="மு.வரதராசனார்" explanation={matchingKural.kuralInfo.mv} />

            <Explanation who="Unknown" explanation={matchingKural.kuralInfo.explanation} />
            <Explanation who="ChatGPT 4" explanation={matchingKural.kuralInfo.gptExplanation} />
          </div>
        )}
      </div>
    </div>
  );
}

function Explanation({ who, explanation }: { who: string; explanation: string }) {
  return (
    <div>
      <div>{explanation}</div>
      <div className="form-text my-2"> - {who}</div>
      <div className="border my-4 " />
    </div>
  );
}

function tryFindMatchingKural(kuralNumber: string) {
  const kuralId = parseInt(kuralNumber);
  if (kuralId) {
    const matching = kurals.find((k) => k.number === kuralId);
    if (matching) {
      const metaData = findMeta(matching.number);
      return { kuralInfo: matching, meta: metaData };
    }
  }
}

function findMeta(kuralNumber: number) {
  for (const pal of meta) {
    for (const iyal of pal.iyal) {
      for (const athigaram of iyal.athigaram) {
        if (kuralNumber >= athigaram.start && kuralNumber <= athigaram.end) {
          return { pal, iyal, athigaram };
        }
      }
    }
  }
}

function getNavLinks(kuralNumber?: number) {
  if (!kuralNumber) {
    return { prev: undefined, next: undefined };
  }
  const prev = kuralNumber > 1 ? kuralNumber - 1 : undefined;
  const next = kuralNumber < 1330 ? kuralNumber + 1 : undefined;

  return { prev, next };
}

function getRandomKuralNumber() {
  return getRandomInt(1, 1330);
}
function getRandomInt(min: number, max: number) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}
