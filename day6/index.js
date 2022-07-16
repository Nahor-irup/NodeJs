import express from "express";
import booksRouter from "./routes/booksRoute.js";
import rateLimit from "express-rate-limit";

const app = express();
app.use(express.json());        //to parse data in json format of frontend
app.use(express.urlencoded({ extended: true }));        //form data from front-end
app.use(express.static("public"));

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    standardHeaders: true,
    legacyHeaders: false,
});
app.use(limiter);

app.use((req, res, next) => {
    console.log("index middleware");
    next();
});


app.get("/", (req, res) => {
    res.status(200).send("Backend is working");
});

app.use("/books", booksRouter);



app.listen(8000, () => {
    console.log("Server is started");
});