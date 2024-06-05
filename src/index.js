const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, "index.html");
  fs.readFile(filePath, (err, data) => {
    if (!err) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    } else {
      res.writeHead(400);
      res.write("file not found");
      res.end();
    }
  });
});

server.listen(3000, () => {
  console.log("Server running at PORT: 3000/");
});
