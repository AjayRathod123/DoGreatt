// Importing Our Modules
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");

// Importing our env file
const app = express();

dotenv.config({
  path: "C:/Users/Admin/Desktop/HTML/Mernreact/server/config.env",
});

require("C:/Users/Admin/Desktop/HTML/Mernreact/server/db/conn.js");
app.use(express.json());

app.use(require("./router/auth.js"));

const PORT = process.env.PORT || 8000;

// Routing

app.get("/", (req, res) => {
  res.send("Hello in home page");
});

app.get("/about", (req, res) => {
  res.send("Hello in about page");
});

app.get("/service", (req, res) => {
  res.send("Hello in service page");
});

app.get("/work", (req, res) => {
  res.send("Hello in work page");
});

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("/client/build"));
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// }

__dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, (req, res) => {
  console.log(`Listennig at port number ${PORT}`);
});
