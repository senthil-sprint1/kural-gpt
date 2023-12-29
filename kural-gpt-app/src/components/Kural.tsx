import React from "react";
import { KuralType } from "../types/types";

export default function Kural({ kural }: { kural: KuralType }) {
  return (
    <div>
      <div>{kural.number}</div>
      <div>{kural.line1}</div>
      <div>{kural.line2}</div>
      <div>{kural.translation}</div>
      <div>{kural.mv}</div>
      <div>{kural.sp}</div>
      <div>{kural.mk}</div>

      <div>{kural.explanation}</div>
      <div>{kural.gptExplanation}</div>
    </div>
  );
}
