import { ArtistCredit } from "./Artist";
import { Release } from "./Release";

export interface RecordingExtended {
  "artist-credit": ArtistCredit[];
  releases: Release[];
  isrcs: string[];
}

interface RecordingBase {
  title: string;
  length: number;
  id: string;
  video: boolean;
  disambiguation?: string;
}

export type Recording<T extends keyof RecordingExtended = never> = RecordingBase & Pick<RecordingExtended, Extract<keyof RecordingExtended, T>>;

export type RecordingInclude = ("artist-credits" | "isrcs")[];
