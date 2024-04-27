var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");

var app = express();

const jsonParser = bodyParser.json;
app.use(cors());
app.use(jsonParser());

app.post("/data", function (req, res, next) {
  console.log(req.body);
  res.status(200).send({ message: "success" });
});

app.get("/", function (req, res, next) {
  res.send("hello");
});

app.listen(8080, function () {
  console.log("Server is running");
});
