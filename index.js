const path = require("path");
var express = require("express");

var app = express();

app.set("view engine", "ejs");

app.use("/public", express.static(path.join(__dirname, "public")));
app.use(express.json());

// index page
app.get("/", function (req, res) {
  res.render("pages/index");
});

// method to get list html code
app.get("/list-items", function (req, res) {
  itemsNumber = Number(req.query.items_number);
  if (itemsNumber > 0) {
    res.render("partials/list", {
      itemsNumber,
    });
  }
});

module.exports = app;

// app.listen(8080);
// console.log("Server is listening on port 8080");
