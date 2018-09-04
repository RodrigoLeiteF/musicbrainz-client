interface Artist {
  id: string;
  name: string;
  "sort-name": string;
  disambiguation?: string;
}

interface ArtistCredit {
  joinphrase?: string;
  artist: Artist;
}

interface ReleaseGroup {
  id: string;
  "type-id": string;
  title: string;
  "primary-type": "Album" | "Single" | "EP" | "Broadcast" | "Other";
  "secondary-types": ("Compilation" | "Soundtrack" | "Spokenword" | "Interview" | "Audiobook" | "Live" | "Remix" | "DJ-mix" | "Mixtape/Street")[];
}

interface Track {
  id: string;
  number: string;
  title: string;
  length: string;
}

interface Media {
  position: number;
  format: string;
  track: Track[];
  "track-count": number;
  "track-offset": number;
}

interface Release {
  id: string;
  count: number;
  title: string;
  status: "Official" | "Promotional" | "Bootleg" | "Pseudo-release";
  "artist-credit": ArtistCredit[];
  "release-group": ReleaseGroup;
  date: string;
  country: string;
  "track-count": string;
  media: Media[];
}

export interface Recording {
  id: string;
  score?: number;
  title: string;
  length: number;
  video?: string;
  "artist-credit": ArtistCredit[];
  releases: Release[];
}