export type KuralTable = {
  kural_json: Kural;
  kural_number: number;
};

export type Kural = {
  Line1: string;
  Line2: string;
  Translation: string;
  explanation: string;
  mk: string;
  mv: string;
  sp: string;
  Number: number;
};

export type KuralType = {
  line1: string;
  line2: string;
  translation: string;
  explanation: string;
  mk: string;
  mv: string;
  sp: string;
  number: number;
  gptExplanation: string;
};
