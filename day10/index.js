import express from "express";
import userRouter from "./routes/userRoute.js";
import connection from './models/connection.js';

const app = express();
app.use(express.json());

app.use("/user", userRouter);

app.listen(8000, async () => {
    console.log("Server started");
    try {
        await connection.authenticate();
        connection.sync();      //{ force: true }->to drop and create table again  //{ alter: true } -> data wont delete 
        console.log("Database connection established");
    } catch (error) {
        console.log("Database connection can't be established....\n", error);
    }
});