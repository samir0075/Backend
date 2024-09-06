
//Importing http module
const http = require("http");

//Custom file
const routes = require("./routes")

// The request which we received will handle from here 
// const rqListner = (req, res) => {
// console.log(req.url, req.headers, req.method)
// Automatically exit the server when no request come
// process.exit();

// }

//Creating a server
const server = http.createServer(routes);

//Server running on port 3000
server.listen(3000); 