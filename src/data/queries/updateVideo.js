import { sql } from "../dbConfig.js";

export async function updateVideo({ title, description, duration, id }) {
  return sql`UPDATE public.video SET title=${title}, description=${description}, duration=${duration} WHERE id=${id}`;
}
