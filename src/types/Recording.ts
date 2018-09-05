import { ArtistCredit } from "./Artist";
import { Release } from "./Release";
import { Tag } from "./Tag";

export interface RecordingExtended {
  "artist-credit": ArtistCredit[];
  releases: Release[];
  isrcs: string[];
  tags: Tag[];
}

interface RecordingBase {
  title: string;
  length: number;
  id: string;
  video: boolean;
  disambiguation?: string;
}

export type Recording<T extends keyof RecordingExtended = never> = RecordingBase & Pick<RecordingExtended, Extract<keyof RecordingExtended, T>>;

export type RecordingInclude = ("artist-credits" | "isrcs" | "tags")[];
