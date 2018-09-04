import MusicBrainz from "../src";
import { expect } from 'chai';
import 'mocha';

describe("MusicBrainz", () => {

  it("assigns the User Agent string correctly", () => {
    const userAgent = "TestApp/1.0";

    const nb = new MusicBrainz(userAgent);
    expect(nb.userAgent).to.equal(userAgent);
  });

  describe("Get methods", () => {
    describe("MusicBrainz.getArtist", () => {

      const nb = new MusicBrainz("TestApp/1.0");
      const artistMbid = "5b11f4ce-a62d-471e-81fc-a69a8278c7da";

      it("queries the correct artist", async () => {
        const result = await nb.getArtist(artistMbid);
        expect(result.id).to.equal(artistMbid);
      });

      it("queries the correct artist with the correct fields", async () => {
        const result = await nb.getArtist(artistMbid, {
          include: ["aliases"]
        });
        expect(result.aliases).to.not.be.undefined;
      });

    });

    describe("MusicBrainz.getRecording", () => {
      const nb = new MusicBrainz("TestApp/1.0");
      const recordingId = "fcbcdc39-8851-4efc-a02a-ab0e13be224f";

      it("queries the correct recording", async () => {
        const result = await nb.getRecording(recordingId);
        expect(result.id).to.equal(recordingId);
      });

      it("queries the correct recording with the correct fields", async () => {
        const result = await nb.getRecording(recordingId, {
          include: ["artist-credits", "isrcs"]
        });
        expect(result.id).to.equal(recordingId);
        expect(result.isrcs).to.not.be.undefined;
        expect(result["artist-credit"]).to.not.be.undefined;
      });

    });

    describe("MusicBrainz.getRelease", () => {
      const nb = new MusicBrainz("TestApp/1.0");
      const releaseId = "044ed385-2aab-40f0-a570-98a3d167a7d6";

      it("queries the correct release", async () => {
        const result = await nb.getRelease(releaseId);
        expect(result.id).to.equal(releaseId);
      });

      it("queries the correct release with the correct fields", async () => {
        const result = await nb.getRelease(releaseId, {
          include: ["recordings"]
        });
        expect(result.id).to.equal(releaseId);
        expect(result.media).to.not.be.undefined;
      });

    });
  });

});