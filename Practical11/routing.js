const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    switch (req.url) {
        case '/':
        case '/home':
            res.end("Welcome to Home Page");
            break;
        case '/login':
            res.end("Login Page");
            break;
        case '/data':
            res.end(JSON.stringify({
                name: "Avni",
                course: "Node.js",
                status: "Active"
            }));
            break;
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end("404 Page Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});