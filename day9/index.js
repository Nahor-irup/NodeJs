import express from "express";
import userRouter from "./routes/userRoute.js";
import connection from './models/index.js';

const app = express();
app.use(express.json());

app.use("/user", userRouter);

app.listen(8000, async () => {
    console.log("Server started");
    try {
        await connection.authenticate();
        connection.sync();      //{ force: true }->to drop and create table again
        console.log("Connection established");
    } catch (error) {
        console.log("Connection can't be established", error);
    }
});