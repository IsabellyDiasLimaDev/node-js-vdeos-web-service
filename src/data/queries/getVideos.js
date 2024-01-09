import { sql } from "../dbConfig.js";

export async function getVideos() {
  return sql`SELECT title, description, duration, id FROM public.video`;
}
