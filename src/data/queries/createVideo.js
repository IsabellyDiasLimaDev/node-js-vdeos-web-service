import { sql } from "../dbConfig.js";

export async function createVideo({ title, description, duration, id }) {
  return sql`INSERT INTO video (id, title, description, duration) VALUES (${id},${title},${description},${duration})`;
}
