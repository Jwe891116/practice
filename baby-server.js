//Remove default css
// // *,
// ::before,
// ::after {
//     box-sizing: border-box;
// }

//Filename: baby-server.js

//use http package
const http = require("http");

//Create the wweb server
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello world!, This is our first Node.js web application.\n');
});

//Start the web server and listen for request
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servere is running at http://localhost:${PORT}/`);
});