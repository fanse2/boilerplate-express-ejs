const express = require("express");
const app = express();
const userRouter = require("./routes/users");

app.use(express.static("public"));
//npm i ejs
app.set("view engine", "ejs");

app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.render("index", { name: "June" });
});

app.listen(3000);
