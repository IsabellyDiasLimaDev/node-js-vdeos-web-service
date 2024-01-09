import { sql } from "../dbConfig.js";

export async function deleteVideo(id) {
    return sql`DELETE FROM public.video WHERE id=${id}`;
}