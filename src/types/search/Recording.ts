interface Artist {
  id: string;

  /**
   * The official name of an artist, be it a person or a band.
   */
  name: string;

  /**
   * The sort name is a variant of the artist name which would be used when sorting artists by name, such as in record shops or libraries. Among other things, sort names help to ensure that all the artists that start with "The" don't end up up under "T". The guidelines for sort names are the best place to check for more specific usage info.
   */
  "sort-name": string;

  /**
   * The disambiguation comments are fields in the database used to help distinguish identically named artists, labels and other entities.
   */
  disambiguation?: string;
}

interface ArtistCredit {
  joinphrase?: string;
  artist: Artist;
}

interface ReleaseGroup {
  id: string;
  "type-id": string;

  /**
   * The title of a release group is usually very similar, if not the same, as the titles of the releases contained within it.
   */
  title: string;

  /**
   * The type of a release group describes what kind of release group it is. It is divided in two: a release group can have a "main" type and an unspecified number of extra types.
   */
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
   * An alternate version of a release where the titles have been changed. These don't correspond to any real release and should be linked to the original release using the transl(iter)ation relationship.
   */
  status: "Official" | "Promotional" | "Bootleg" | "Pseudo-release";

  /**
   * The artist(s) that the recording is primarily credited to.
   */
  "artist-credit": ArtistCredit[];

  /**
   * A release group, just as the name suggests, is used to group several different releases into a single logical entity. Every release belongs to one, and only one release group.
   */
  "release-group": ReleaseGroup;

  /**
   * The date the release was issued.
   */
  date: string;

  /**
   * The country the release was issued in.
   */
  country: string;
  "track-count": string;
  media: Media[];
}

/**
 * A recording is an entity in MusicBrainz which can be linked to tracks on releases. Each track must always be associated with a single recording, but a recording can be linked to any number of tracks.
 * A recording represents distinct audio that has been used to produce at least one released track through copying or mastering. A recording itself is never produced solely through copying or mastering.
 * Generally, the audio represented by a recording corresponds to the audio at a stage in the production process before any final mastering but after any editing or mixing.
 */
export interface Recording {
  id: string;
  score?: number;

  /**
   * The title of the recording.
   */
  title: string;

  /**
   * An approximation to the length of the recording, calculated from the lengths of the tracks using it.
   */
  length: number;
  video?: string;

  /**
   * The artist(s) that the recording is primarily credited to.
   */
  "artist-credit": ArtistCredit[];
  releases: Release[];
}