import { InitOptions, GetRecordingOptions, GetReleaseOptions } from "./types";
import fetch from "node-fetch";
import { Artist, ArtistExtended, ArtistInclude } from "./types/Artist";
import { Recording } from "./types/Recording";
import { Release } from "./types/Release";
import { ArtistSearch, RecordingSearch, ReleaseSearch } from "./types/Search";

export default class MusicBrainz {
  public userAgent: string;
  public baseUrl = "http://musicbrainz.org/ws/2/";

  constructor(userAgent: string, options?: InitOptions) {
    this.userAgent = userAgent;
  }

  private _formatUrl(path: string, parameters?: any) {
    let finalUrl = this.baseUrl + path + "?";

    // Append where parameters
    if (parameters && parameters.where) {
      Object.entries(parameters.where).forEach(([key, value]) => {
        finalUrl += `&${key}=${value}`;
      });
    }

    // Append query parameters
    if (parameters && parameters.query) {
      finalUrl += `&query=${parameters.query}`
    }

    // Append include parameters
    if (parameters && parameters.include) {
      finalUrl += `&inc=${parameters.include.join("+")}`;
    }

    finalUrl += "&fmt=json";
    return finalUrl;
  }

  private _executeRequest(path: string, parameters?: any, method = "GET", body?: any) {
    return fetch(this._formatUrl(path, parameters), {
      method,
      body,
      headers: {
        "User-Agent": this.userAgent
      }
    });
  }

  /**
   * Returns a specific artist's information.
   * 
   * @param id The artist's unique MusicBrainz ID
   */
  async getArtist<T extends keyof ArtistExtended>(id: string, include?: ArtistInclude): Promise<Artist<T>>;
  async getArtist(id: string, include?: string[]): Promise<Artist & { [P in keyof ArtistExtended]?: ArtistExtended[P] }>;
  async getArtist(id: string, include?: string[]) {
    const response = await this._executeRequest("artist/" + id, { include });

    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(response.statusText);
    }
  }

  /**
   * Returns a specific recording's information.
   * 
   * @param id The recording's unique MusicBrainz ID
   */
  async getRecording(id: string, options?: GetRecordingOptions): Promise<Recording> {
    const response = await this._executeRequest("recording/" + id, options);
    if (response.status === 200) {
      return response.json();
    } else {
      throw response.status;
    }
  }

  /**
   * Returns a specific release's information.
   * 
   * @param id The release's unique MusicBrainz ID
   */
  async getRelease(id: string, options?: GetReleaseOptions): Promise<Release> {
    const response = await this._executeRequest("release/" + id, options);
    if (response.status === 200) {
      return response.json();
    } else {
      throw response.status;
    }
  }

  async searchArtist(query: string): Promise<ArtistSearch> {
    const response = await this._executeRequest(`artist/`, {
      query
    });
    if (response.status === 200) {
      return response.json();
    } else {
      throw response.status;
    }
  }

  async searchRecording(query: string): Promise<RecordingSearch> {
    const response = await this._executeRequest(`recording/`, {
      query
    });
    if (response.status === 200) {
      return response.json();
    } else {
      throw response.status;
    }
  }

  async searchRelease(query: string): Promise<ReleaseSearch> {
    const response = await this._executeRequest(`release/`, {
      query
    });
    if (response.status === 200) {
      return response.json();
    } else {
      throw response.status;
    }
  }
}