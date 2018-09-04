interface Tag {
  count: number;
  name: string;
}

interface LifeSpan {
  begin?: string;
  ended?: string;
}

interface Area {
  id: string;
  type: "Country" | "Subdivision" | "County" | "Municipality" | "City" | "District" | "Island";
  "type-id": string;
  name: string;
  "sort-name": string;
}

interface Alias {
  "sort-name": string;
  name: string;
  locale?: string;
  type?: string;
  primary?: string;
  "begin-date"?: string;
  "end-date"?: string;
}

export interface Artist {
  id: string;
  type: "Person" | "Group" | "Orchestra" | "Choir" | "Character" | "Other";
  gender: "male" | "female" | "other";
  name: string;
  "sort-name": string;
  country: string;
  area: Area;
  "life-span": LifeSpan;
  tags: Tag[];
  disambiguation?: string;
  score?: number;
  ipis?: string[];
  aliases?: Alias[];
}