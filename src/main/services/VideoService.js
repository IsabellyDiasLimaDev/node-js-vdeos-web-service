import { DatabasePostgres } from "../../data/DatabasePostgres.js";

export class VideoService {
  database = new DatabasePostgres();

  async create({ title, description, duration }) {
    return this.database.create({
      title,
      description,
      duration,
    });
  }

  async getAll(search) {
    return this.database.list(search);
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
