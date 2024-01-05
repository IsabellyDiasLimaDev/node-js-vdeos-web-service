import {randomUUID} from "node:crypto";
import { sql } from "./db.js";

export class DatabasePostgres {
    #videos = new Map();

    async list(search) {
        let videos;

        if (search) {
            videos = await sql`SELECT title, description, duration, id FROM public.video WHERE title like ${'%' + search + '%'}`;
        }
        else {
            videos = await sql`SELECT title, description, duration, id FROM public.video`;
        }
        
        return videos;
    }

    async create(video){
        const videoId = randomUUID();

        const {title, description, duration} = video;

        await sql`insert into video (id, title, description, duration) values  (${videoId},${title},${description},${duration})`;
    }
    async update(id, video){
        const {title, description, duration} = video;
        await sql`UPDATE public.video SET title=${title}, description=${description}, duration=${duration}`;
    }
    async delete(id){
        await sql`DELETE FROM public.video WHERE id=${id}`;
    }

    async getById(id){
        const video = await sql`SELECT title, description, duration, id FROM public.video WHERE id=${id}`;
        return video;
    }
}