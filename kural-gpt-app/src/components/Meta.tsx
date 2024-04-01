import { meta } from "@/src/components/kural-meta";

export function Meta({
  kuralId,
  showNav,
  classNames = "",
}: {
  kuralId: number;
  showNav?: boolean;
  classNames?: string;
}) {
  const metaData = findMeta(kuralId);
  const navLinks = getNavLinks(kuralId);
  if (!metaData) {
    return null;
  }
  return (
    <div className={`d-flex flex-wrap gap-3 ${classNames}`}>
      <div className="d-inline-block">
        <span className="badge rounded-pill text-bg-info me-2">{metaData?.pal.name}</span>
        <span className="badge rounded-pill text-bg-success me-2">{metaData?.iyal.name}</span>
        <span className="badge rounded-pill text-bg-warning me-2">{metaData?.athigaram.name}</span>
      </div>
      {showNav && (
        <div className="d-inline-block">
          {navLinks.prev && (
            <a href={`/kural/${navLinks.prev}`} title="Go to previous" className="btn btn-primary kural-nav-btn me-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
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
                  fillRule="evenodd"
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
                fillRule="evenodd"
                d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.6 9.6 0 0 0 7.556 8a9.6 9.6 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.6 10.6 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.6 9.6 0 0 0 6.444 8a9.6 9.6 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5"
              />
              <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192m0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192" />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
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
