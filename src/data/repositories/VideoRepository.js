import { randomUUID } from "node:crypto";
import { createVideo } from "../queries/createVideo.js";
import { getVideos } from "../queries/getVideos.js";
import { searchVideos } from "../queries/searchVideos.js";
import { updateVideo } from "../queries/updateVideo.js";
import { getVideoById } from "../queries/getVideoById.js";
import { deleteVideo } from "../queries/deleteVideo.js";

export class VideoRepository {
  async listAll() {
    return getVideos();
  }

  async getById(id) {
    return getVideoById(id);
  }

  async search(search) {
    return searchVideos(search);
  }

  async create(video) {
    const id = randomUUID();
    return createVideo({ ...video, id });
  }

  async update(video) {
    return updateVideo(video);
  }

  async delete(id) {
    return deleteVideo(id);
  }
}
