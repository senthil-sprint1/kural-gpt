import React from "react";
import { KuralType } from "../types/types";

export default function Kural({ kural }: { kural: KuralType }) {
  return (
    <div className="card">
      <div className="card-body">
        <div>{kural.line1}</div>
        <div>
          {kural.line2} ({kural.number})
        </div>
        <div>
          <strong>மு.வரதராசனார்: </strong>
          {kural.mv}
        </div>
        <div>
          <strong>சாலமன் பாப்பையா: </strong>
          {kural.sp}
        </div>
        <div>
          <strong>கலைஞர்: </strong>
          {kural.mk}
        </div>

        <div className="my-2">
          <strong>English Translation: </strong>
          {kural.translation}
        </div>
        <div className="my-2">
          <strong>Explanation: </strong>
          {kural.explanation}
        </div>
      </div>
    </div>
  );
}
