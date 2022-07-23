import { Sequelize } from "sequelize";
import "dotenv/config";

const sequelize = new Sequelize(
    process.env.DB_DATABASE,    //database name
    process.env.DB_USERNAME,    //username
    '',     //password
    {
        host: process.env.DB_HOST,
        dialect: "mysql",
    });


export default sequelize;