// Filename: hello.js

// Get access to the http package
const http = require("http");

// Create a web server and specifiy the URL that is accepted
// Here were are listening for the  '/' URL
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/plain", // HTTP response header
  });
  res.end("Welcome to the MangoTree service.\n");
});

const PORT = 3000;

// Start the server and listen for HTTP requests on port 3000
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});