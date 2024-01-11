import { VideoService } from "../services/VideoService.js";

export class VideoController {
  videoService = new VideoService();

  async create(req, res) {
    const video = await this.videoService.create(req.body);

    if (video?.error) {
      return res.status(400).send(video);
    }
    return res.status(201).send(video);
  }

  async getAll(req, res) {
    const { search } = req.query;
    const videos = await this.videoService.getAll(search);

    if (videos?.error) {
      return res.status(400).send(videos);
    }

    return res.send(videos);
  }

  async getById(req, res) {
    const { id } = req.params;
    const video = await this.videoService.getById(id);

    if (video?.error) {
      return res.status(400).send(video);
    }

    return res.send(video);
  }

  async update(req, res) {
    const { id } = req.params;
    const { title, description, duration } = req.body;

    const command = await this.videoService.update({
      id,
      title,
      description,
      duration,
    });

    if (command?.error) {
      return res.status(400).send(command);
    }

    return res.status(204).send();
  }

  async delete(req, res) {
    const { id } = req.params;

    const command = await this.videoService.delete(id);

    if (command?.error) {
      console.log(command.error);
      return res.status(400).send(command);
    }

    return res.status(204).send();
  }
}
