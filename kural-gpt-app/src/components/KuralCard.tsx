import { KuralType } from "../types/types";
import { Meta } from "./Meta";

export function KuralCard({ kural }: { kural: KuralType }) {
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

              <div className="my-2 fst-italic form-text" title="சாலமன் பாப்பையா">
                {kural.sp}
              </div>

              <div className="my-2 fst-italic form-text">{kural.explanation}</div>

              <Meta kuralId={kural.number} showNav={false} />
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
                  fillRule="evenodd"
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
