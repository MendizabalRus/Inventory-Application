require("dotenv").config({ path: "../.env" });
const express = require("express");
const path = require("node:path");

const router = require("./routes/router.js");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "../public")));

app.use("/", router);

app.listen(process.env.PORT, (error) => {
  if (error) throw error;
  console.log(process.env.PORT);
  console.log(`Server initalised - http://localhost:${process.env.PORT}`);
});
