import http from "http";

const server = http.createServer((req, res) => {
    // res.writeHead(200);
    // res.end("Backend is working");
    if (req.url === "/books") {
        console.log(req.method)
        res.writeHead(200);
        res.end("Books is working");
    }
    else if (req.url === "/others") {
        res.writeHead(200);
        res.end("Others is working");
    }
    else {
        res.writeHead(200);
        res.end("Backend is working");
    }
    // console.log(res);
});

server.listen(8000, () => {
    console.log("Server is running");
});
