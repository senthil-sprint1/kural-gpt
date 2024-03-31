export type KuralTable = {
  kural_json: KuralType;
  kural_number: number;
};

export type KuralTypeOriginal = {
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

export interface KuralMetadata {
  pal: string;
  iyal: string;
  athigaram: Athigaram;
}
export function getMetaData(kuralNumber: number) {}

interface Pal {
  name: string;
  translation: string;
  index: number;
  iyal: Iyal[];
}

interface Iyal {
  name: string;
  translation: string;
  index: number;
  athigaram: Athigaram[];
}

interface Athigaram {
  name: string;
  translation: string;
  transliteration: string;
  index: number;
  start: number;
  end: number;
}
