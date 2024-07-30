const http = require("node:http");
const fs = require("node:fs");
const url = require("node:url");
const express = require("express");

const app = express();

http
  .createServer(function (req, res) {
    const q = url.parse(req.url, true);
    const paths = {
      "/": "index.html",
      "/about": "about.html",
      "/contact-me": "contact-me.html",
    };

    if (q.pathname in paths) {
      res.writeHead(200, { "Content-Type": "Text/html" });
      fs.readFile(paths[q.pathname], function (err, data) {
        res.write(data);
        res.end();
      });
    } else {
      res.writeHead(404, { Error: "Resource not found" });
      fs.readFile("./404.html", function (err, data) {
        res.write(data);
        res.end();
      });
    }
  })
  .listen(8080);
