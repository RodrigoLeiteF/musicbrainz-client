import { Artist } from "../../lib/types/artist";
import { Recording } from "../../lib/types/release";

export interface BaseSearch {
  created: string;
  count: number;
  offset: number;
}

export interface ArtistSearch extends BaseSearch {
  artists: Artist[];
}

export interface RecordingSearch extends BaseSearch {
  recordings: Recording[];
}

export interface ArtistSearchOptions {
  /**
  * An alias attached to the artist
  */
  alias: string;

  /**
  * The artist's main associated area
  */
  area: string;

  /**
  * The artist's MBID
  */
  arid: string;

  /**
  * The artist's name (without accented characters)
  */
  artist: string;

  /**
  * The artist's name (with accented characters)
  */
  artistaccent: string;

  /**
  * The artist's begin date
  */
  begin: string;

  /**
  * The artist's begin area
  */
  beginarea: string;

  /**
  * The artist's disambiguation comment
  */
  comment: string;

  /**
  * The 2-letter code (ISO 3166-1 alpha-2) for the artist's main associated country, or “unknown”
  */
  country: string;

  /**
  * The artist's end date
  */
  end: string;

  /**
  * The artist's end area
  */
  endarea: string;

  /**
  * aAflag indicating whether or not the artist has ended
  */
  ended: string;

  /**
  * The artist's gender (“male”, “female”, or “other”)
  */
  gender: "male" | "female" | "other";

  /**
  * An IPI code associated with the artist
  */
  ipi: string;

  /**
  * The artist's sort name
  */
  sortname: string;

  /**
  * A tag attached to the artist
  */
  tag: string;

  /**
  * The artist's type (“person”, “group”, ...)
  */
  type: string;

}
