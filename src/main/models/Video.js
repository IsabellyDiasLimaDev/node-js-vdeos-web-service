import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelizeDbConfig.js";

const Video = sequelize.define('video', {
    id: {
        type: DataTypes.INTEGER
    }
})