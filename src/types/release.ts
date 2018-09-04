export interface Recording {
  length: number;
  title: string;
  disambiguation: string;
  video: boolean;
  id: string;
}

export interface Track {
  number: string;
  length: number;
  title: string;
  id: string;
  recording: Recording;
  position: number;
}

export interface RootRecording {
  format: string;
  "track-offset": number;
  tracks: Track[];
  position: number;
  "track-count": number;
  "format-id": string;
  title: string;
}

export interface Area {
  id: string;
  disambiguation: string;
  "iso-3166-1-codes": string[];
  "sort-name": string;
  name: string;
}

export interface ReleaseEvent {
  area: Area;
  date: string;
}

export interface CoverArtArchive {
  artwork: boolean;
  darkened: boolean;
  back: boolean;
  front: boolean;
  count: number;
}

export interface TextRepresentation {
  script: string;
  language: string;
}

export interface Release {
  disambiguation: string;
  barcode?: any;
  packaging?: any;
  title: string;
  country: string;
  quality: string;
  id: string;
  "release-events": ReleaseEvent[];
  asin?: any;
  "packaging-id"?: any;
  status: string;
  "cover-art-archive": CoverArtArchive;
  date: string;
  "status-id": string;
  "text-representation": TextRepresentation;
  media?: RootRecording[];
}