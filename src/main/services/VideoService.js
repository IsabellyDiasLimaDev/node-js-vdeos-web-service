import { VideoRepository } from "../../data/repositories/VideoRepository.js";

export class VideoService {
  repository = new VideoRepository();

  async create({ title, description, duration }) {
    const invalidData = !title || !description || !duration;

    if (invalidData) {
      return { error: "Dados inválidos" };
    }

    return this.repository.create({
      title,
      description,
      duration,
    });
  }

  async getAll(search) {
    const videos = await this.repository.listAll();

    if (!search) {
      if (videos.length <= 0) {
        return { error: "Não foram encontrados registros" };
      }
      return videos;
    }

    return this.getAllWithSearch(search);
  }

  async getAllWithSearch(search) {
    const videos = await this.repository.search(search);

    if (videos.length <= 0) {
      return { error: "Não foram encontrados registros" };
    }

    return videos;
  }

  async getById(id) {
    if (!id) {
      return { error: "Id não foi informado" };
    }

    const video = await this.repository.getById(id);

    if (!video) {
      return { error: "Não foram encontrado registro com o id informado" };
    }
  }

  async update({ id, title, description, duration }) {
    const invalidData = !id || !title || !description || !duration;

    if (invalidData) {
      return { error: "Dados inválidos" };
    }

    await this.repository.update({
      id,
      title,
      description,
      duration,
    });
  }

  async delete(id) {
    if (!id) {
      return { error: "Id não foi informado" };
    }

    const video = await this.repository.getById(id);

    if (!video) {
      return { error: "Não foram encontrado registro com o id informado" };
    }

    await this.repository.delete(id);
  }
}
