const express = require("express");
const app = express();

app.use(express.static("public"));
//npm i ejs
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { name: "June" });
});

app.listen(3000);
