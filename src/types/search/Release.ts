interface TextRepresentation {
  language: string;
  script: string;
}

/**
 * An artist is generally a musician (or musician persona), group of musicians, or other music professional (like a producer or engineer). Occasionally, it can also be a non-musical person (like a photographer, an illustrator, or a poet whose writings are set to music), or even a fictional character. 
 */
interface Artist {
  id: string;

  /**
   * The official name of an artist, be it a person or a band.
   */
  name: string;
  "sort-name": string;
}

interface ArtistCredit {
  joinphrase?: string;
  artist: Artist;
}

interface ReleaseGroup {
  id: string;
  "type-id": string;
  title: string;
  "primary-type": string;
}

interface Area {
  id: string;
  name: string;
  "sort-name": string;
  "iso-3166-1-codes": string[];
}

interface ReleaseEvent {
  date: string;
  area: Area;
}

interface Label {
  id: string;
  name: string;
}

interface LabelInfo {
  label: Label;
}

interface Medium {
  format: string;
  "disc-count": number;
  "track-count": number;
}

interface Tag {
  count: number;
  name: string;
}

export interface Release {
  id: string;
  score: number;
  count: number;

  /**
   * The title of the release.
   */
  title: string;

  /**
   * The status describes how "official" a release is. Possible values are:
   *
   * * **official**:
   * Any release officially sanctioned by the artist and/or their record company. Most releases will fit into this category.
   *
   * * **promotional**:
   * A give-away release or a release intended to promote an upcoming official release (e.g. pre-release versions, releases included with a magazine, versions supplied to radio DJs for air-play).
   *
   * * **bootleg**:
   * An unofficial/underground release that was not sanctioned by the artist and/or the record company. This includes unofficial live recordings and pirated releases.
   *
   * * **pseudo-release**:
   *   An alternate version of a release where the titles have been changed. These don't correspond to any real release and should be linked to the original release using the transl(iter)ation relationship.
   *
   */
  status: "official" | "promotional" | "bootlet" | "pseudo-release";
  "text-representation": TextRepresentation;
  "artist-credit": ArtistCredit[];

  /**
   * A release group, just as the name suggests, is used to group several different releases into a single logical entity. Every release belongs to one, and only one release group.
   */
  "release-group": ReleaseGroup;
  date: string;
  country: string;
  "release-events": ReleaseEvent[];
  asin: string;
  "label-info": LabelInfo[];
  "track-count": number;
  media: Medium[];
  tags: Tag[];
}

const foo = {} as Release;
foo.status