import express from "express";

const router = express.Router();


router.get("/", (req, res) => {
    res.status(200).send({ name: "Rohan" });
});

router.get("/add", (req, res) => {
    // res.status(200).send("Books added");
    res.status(200).json({ added: "true" });
});

router.get("/delete/:id/:author", (req, res) => {
    console.log(req.params);
    // console.log(req.query);
    res.status(200).json({ delete: true });
});

export default router;