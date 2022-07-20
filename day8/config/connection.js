import mysql from "mysql2/promise";
import "dotenv/config";

export default await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    database: process.env.DB_DATABASE,
});