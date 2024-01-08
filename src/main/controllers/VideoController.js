import { DatabasePostgres } from "../../data/DatabasePostgres.js";

export class VideoController {
    database = new DatabasePostgres();

    async create(req, res) {
        const {title, description, duration} = req.body;
    
        await this.database.create({ 
            title,
            description,
            duration,
        });
    
        return res.status(201).send();
    }

    async getAll(req, res) {
        const search = req.query.search;
        const videos = await this.database.list(search);
    
        return videos;
    }

    async getById(req, res) {
        const id = req.params.id;
        const video = await this.database.getById(id);
    
        return video;
    }

    async update(req, res) {
        const videoId = req.params.id;
    
        const {title, description, duration} = req.body;
    
        await this.database.update(videoId, {
            title,
            description,
            duration,
        });
    
        return res.status(204).send();
    }

    async delete(req, res) {
        const videoId = req.params.id;
    
        await this.database.delete(videoId);
    
        return res.status(204).send();
    }
}