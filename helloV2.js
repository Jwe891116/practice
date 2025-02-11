// Filename: hello.js

// Get access to the http package
const http = require("http");

// WARNING: Ensure that you only write response headers once per response
const server = http.createServer((req, res) => {
  // Routing the hard way
  if (req.url === "/") {
    // set the happy response header
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home page.\n");
  } else if (req.url === "/about") {
    // set the happy response header
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("What do you want to know?\n");
  } else if (req.url === "/hello"){
    res.writeHead(200, {"Content-Type": "test/plain"});
    res.end("My name is Joshua Emmanuel.\n");
  }else if (req.url ==="/university"){
    res.writeHead(200, {"Content-type": "text/plain"});
    res.end("University of Belize.\n");
  }else if (req.url === "/class"){
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("GUI Programming.\n");
  }else {
    // set the sad response header
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found.\n");
  }
});

const PORT = 3000;

// Start the server and listen for HTTP requests on port 3000
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});