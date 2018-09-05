interface AreaExtended {
  type: string;
  "type-id": string;
}

interface AreaBase {
  "iso-3166-1-codes": string[];
  id: string;
  disambiguation?: string;
  "sort-name": string;
  name: string;
}

export type Area<T extends keyof AreaExtended = never> = AreaBase & Pick<AreaExtended, Extract<keyof AreaExtended, T>>;
