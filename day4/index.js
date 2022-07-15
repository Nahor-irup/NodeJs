import http from "http";

const server = http.createServer((req, res) => {
    // res.writeHead(200);
    // res.end("Backend is working");
    switch (req.url) {
        case "/books":
            console.log(req.method);
            res.writeHead(200);
            res.end("Books is working");
            break;
        case "/others":
            res.writeHead(200);
            res.end("Others is working");
            break;
        default:
            res.writeHead(200);
            res.end("Backend is working");

    }
});

server.listen(8000, () => {
    console.log("Server is running");
});
