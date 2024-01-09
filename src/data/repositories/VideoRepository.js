import { createVideo } from "../queries/createVideo.js";
import { getVideos } from "../queries/getVideos.js";
import { searchVideos } from "../queries/searchVideos.js";
import { randomUUID } from "node:crypto";

export class VideoRepository {
  async listAll() {
    return getVideos();
  }

  async search(search) {
    return searchVideos(search);
  }

  async create(video) {
    const id = randomUUID();
    return createVideo({ ...video, id });
  }
}
