import { Sequelize } from "sequelize";

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

export const sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
  host: "localhost",
  port: 5432,
  dialect: "postgres",
});
