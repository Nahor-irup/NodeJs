import express from "express";
import validateToken from "../middlewares/validateToken.js";

const router = express.Router();

router.use((req, res, next) => {
    validateToken(req, res, next);
});

router.get("/", validateToken, (req, res) => {
    res.status(200).send({ name: "Rohan" });
});

router.post("/add", (req, res) => {
    // res.status(200).send("Books added");
    console.log(req.body, req.query);
    res.status(200).json({ added: "true" });

});

router.delete("/delete/:id", (req, res) => {
    console.log(req.params);
    // console.log(req.query);
    res.status(200).json({ delete: true });
});

export default router;