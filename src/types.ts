export interface InitOptions {

}

export type ReleaseLinkedEntities = "area" | "artist" | "collection" | "label" | "track" | "track_artist" | "recording" | "release-group";
type ReleaseWhereOptions = {
  [K in ReleaseLinkedEntities]?: string;
}
export interface GetReleaseOptions {
  where?: ReleaseWhereOptions;
  include?: ("artist-credits" | "labels" | "recordings" | "release-groups" | "media" | "discids" | "isrcs")[];
}

export type RecordingLinkedEntities = "artist" | "collection" | "release";
type RecordingWhereOptions = {
  [K in RecordingLinkedEntities]?: string
}
export interface GetRecordingOptions {
  where?: RecordingWhereOptions;
  include?: ("artist-credits" | "isrcs")[];
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
