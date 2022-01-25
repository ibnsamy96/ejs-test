const path = require("path");
var express = require("express");
var ejs = require("ejs");

var app = express();

// set the view engine to ejs
// app.use("/public", express.static("public"));

app.set("view engine", "ejs");
app.use("/public", express.static(path.join(__dirname, "public")));
console.log(path.join(__dirname, "styles"));
app.use(express.json());

// use res.render to load up an ejs view file
let people = 10;

// index page
app.get("/", function (req, res) {
  var mascots = [
    { name: "Sammy", organization: "DigitalOcean", birth_year: 2012 },
    { name: "Tux", organization: "Linux", birth_year: 1996 },
    { name: "Moby Dock", organization: "Docker", birth_year: 2013 },
  ];
  var tagline =
    "No programming concept is complete without a cute animal mascot.";

  res.render("pages/index", {
    mascots,
    tagline,
    people,
  });
});

app.get("/list-items", function (req, res) {
  itemsNumber = Number(req.query.items_number);
  if (itemsNumber > 0) {
    res.render("partials/list", {
      itemsNumber,
    });
  }
});

app.listen(8080);
console.log("Server is listening on port 8080");
