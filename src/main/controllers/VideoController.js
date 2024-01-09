import { VideoService } from "../services/VideoService.js";

export class VideoController {
  videoService = new VideoService();

  async create(req, res) {
    await this.videoService.create(req.body);

    return res.status(201).send();
  }

  async getAll(req, res) {
    const { search } = req.query;
    return this.videoService.getAll(search);
  }

  async getById(req, res) {
    const { id } = req.params;
    return this.videoService.getById(id);
  }

  async update(req, res) {
    const { id } = req.params;
    const { title, description, duration } = req.body;

    await this.videoService.update({ id, title, description, duration });

    return res.status(204).send();
  }

  async delete(req, res) {
    const { id } = req.params;

    await this.videoService.delete(id);

    return res.status(204).send();
  }
}
