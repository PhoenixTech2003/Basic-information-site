const http = require("node:http");
const fs = require("node:fs");
const url = require("node:url");
const express = require("express");

const app = express();
const PORT = 9000

try{
  app.get('/',(req,res)=>{
    fs.readFile('./index.html',function(err,data){
      res.write(data)
      res.end()
    })
  })

  app.get('/about',(req,res)=>{
    fs.readFile('./about.html',function(err,data){
      res.write(data)
      res.end()
    })
  })

  app.get('/contact-me',(req,res)=>{
    fs.readFile('./contact-me.html',function(err,data){
      res.write(data)
      res.end()
    })
  })

  app.listen(PORT,()=> console.log("express server has launched"))
}catch(err){
  console.log("404 error found")
}

// http
//   .createServer(function (req, res) {
//     const q = url.parse(req.url, true);
//     const paths = {
//       "/": "index.html",
//       "/about": "about.html",
//       "/contact-me": "contact-me.html",
//     };

//     if (q.pathname in paths) {
//       res.writeHead(200, { "Content-Type": "Text/html" });
//       fs.readFile(paths[q.pathname], function (err, data) {
//         res.write(data);
//         res.end();
//       });
//     } else {
//       res.writeHead(404, { Error: "Resource not found" });
//       fs.readFile("./404.html", function (err, data) {
//         res.write(data);
//         res.end();
//       });
//     }
//   })
//   .listen(8080);
