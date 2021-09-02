const express = require("express");
const app = express();

const path = require("path");
const router = require("./routes/main");

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.listen(3000, () => {
  console.log("Servidor corriendo");
});

app.use("/", router);
