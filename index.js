const http = require('http');
const fs = require('fs').promises

const hostname = 'localhost';
const port = 8080;

const requestListener = function (req, res) {
   switch (req.url){
       case "/":
           fs.readFile( __dirname + "/index.html").then(contents =>{
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
           })
        break;
        case "/about":
           fs.readFile( __dirname + "/about.html").then(contents =>{
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
           })
        break;
        case "/contact-me":
           fs.readFile( __dirname + "/contact-me.html").then(contents =>{
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
           })
        break;
        default:
            fs.readFile( __dirname + "/404.html").then(contents =>{
                res.setHeader("Content-Type", "text/html");
                res.writeHead(404);
                res.end(contents);
               })
   }
};
  
const server = http.createServer(requestListener);




server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});