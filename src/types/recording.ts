import { Release } from "./release";

interface Artist {
  "sort-name": string;
  id: string;
  disambiguation: string;
  name: string;
}

export interface ArtistCredit {
  name: string;
  artist: Artist;
  joinphrase: string;
}

export interface Recording {
  id: string;
  disambiguation: string;
  length?: any;
  title: string;
  video: boolean;
  releases?: Release[];
  "artist-credit"?: ArtistCredit[];
  isrcs?: string[];
}
