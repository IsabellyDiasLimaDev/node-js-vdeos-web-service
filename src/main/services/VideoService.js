import { DatabasePostgres } from "../../data/DatabasePostgres.js";
import { VideoRepository } from "../../data/repositories/VideoRepository.js";

export class VideoService {
  database = new DatabasePostgres();
  repository = new VideoRepository();

  async create({ title, description, duration }) {
    return this.repository.create({
      title,
      description,
      duration,
    });
  }

  async getAll(search) {
    if (!search) {
      return this.repository.listAll();
    }

    return this.repository.search(search);
  }

  async getById(id) {
    return this.database.getById(id);
  }

  async update({ id, title, description, duration }) {
    await this.database.update(id, {
      title,
      description,
      duration,
    });
  }

  async delete(id) {
    await this.database.delete(id);
  }
}
