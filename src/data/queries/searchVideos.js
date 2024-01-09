import { sql } from "../dbConfig.js";

export async function searchVideos(search) {
  return sql`SELECT title, description, duration, id FROM public.video WHERE title like ${
    "%" + search + "%"
  }`;
}
