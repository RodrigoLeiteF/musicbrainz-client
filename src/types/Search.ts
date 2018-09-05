import { Artist } from "./Artist";
import { Recording } from "./Recording";
import { Release } from "./Release";

export interface BaseSearch {
  created: string;
  count: number;
  offset: number;
}

export type ArtistSearch = BaseSearch & {
  artists: Artist[];
};

export type RecordingSearch = BaseSearch & {
  recordings: Recording[];
};

export type ReleaseSearch = BaseSearch & {
  releases: Release[];
};