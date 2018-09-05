import { Artist } from "./Artist";
import { Tag } from "./Tag";
import { Recording } from "./Recording";

interface TextRepresentation {
  script: string;
  language: string;
}

interface Track {
  number: string;
  position: number;
  recording: Recording[];
  title: string;
  length: number;
  id: string;
}

interface Media {
  title: string;
  "format-id": string;
  position: number;
  "track-count": number;
  format: string;
  "track-offset": number;
  tracks: Track[];
}

export interface ReleaseExtended {
  "artist-credits": Artist[];
  tags: Tag[];
  media: Media[];
  recordings: Recording[];
  isrcs: string[];
}

interface ReleaseBase {
  quality: string;
  status: "Official" | "Promotional" | "Bootleg" | "Pseudo-Release";
  "text-representation": TextRepresentation;
  packaging: string;
  id: string;
  disambiguation: string;
  country: string;
  barcode?: string;
  date: string;
  title: string;
  "packaging-id": string;
  "status-id": string;
}

export type Release<T extends keyof ReleaseExtended = never> = ReleaseBase & Pick<ReleaseExtended, Extract<keyof ReleaseExtended, T>>;

export type ReleaseInclude = ("artist-credits" | "labels" | "recordings" | "release-groups" | "media" | "discids" | "isrcs")[];
