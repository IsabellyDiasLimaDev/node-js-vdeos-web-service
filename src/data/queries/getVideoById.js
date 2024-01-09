import { sql } from "../dbConfig.js";

export async function getVideoById(id) {
  return sql`SELECT title, description, duration, id FROM public.video WHERE id=${id}`;
}
