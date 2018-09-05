export interface InitOptions {

}

export interface SearchOptions {
  query: string;
}

export interface Alias {
  name: string;
  ended: boolean;
  primary?: boolean;
  end?: string;
  locale?: string;
  begin?: string;
  "sort-name": string;
  type?: string;
  "type-id"?: string;
}
