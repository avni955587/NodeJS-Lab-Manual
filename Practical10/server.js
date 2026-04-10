const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    console.log("Method:", req.method);
    console.log("URL:", req.url);
    console.log("Headers:", req.headers);
    console.log("Query Params:", parsedUrl.query);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    if (req.method === 'GET') {
        res.end("GET Request Received");
    } 
    else if (req.method === 'POST') {
        let body = "";

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            console.log("Body:", body);
            res.end("POST Request Received with Data");
        });
    } 
    else {
        res.end("Other Request Type");
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});