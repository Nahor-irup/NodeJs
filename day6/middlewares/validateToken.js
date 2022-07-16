export default (req, res, next) => {
    const token = req.headers.token;
    if (token && token == "abc") {
        console.log("Validated");
        next();
    } else {
        console.log("Not Validated");
        res.status(400).send({ success: false, message: "Invalid token" });
    }
};
