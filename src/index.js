const express = require("express");
const path = require("path");
const app = express();
const port = 9000;
const staticPath = path.join(__dirname, "../public");

app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log("I am to listen");
});
