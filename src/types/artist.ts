import { Alias } from "../types";

export interface LifeSpan {
  begin: string;
  ended: boolean;
  end: string;
}

export interface Area {
  "sort-name": string;
  "iso-3166-1-codes": string[];
  disambiguation: string;
  name: string;
  id: string;
}

export interface BeginArea {
  name: string;
  disambiguation: string;
  "sort-name": string;
  id: string;
}

export interface Artist {
  id: string;
  isnis: string[];
  type: string;
  "sort-name": string;
  "type-id": string;
  "life-span": LifeSpan;
  area: Area;
  begin_area: BeginArea;
  gender?: string;
  "gender-id"?: string;
  ipis: string[];
  name: string;
  disambiguation: string;
  end_area?: string;
  country: string;
  aliases?: Alias[];
}
