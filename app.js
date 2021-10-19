/** @format */

const express = require("express");
const app = express();

const path = require("path");
const router = require("./routes/main");
const productRouter = require("./routes/product");
const methodOverride = require("method-override");
const session = require("express-session");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
app.use(session({ secret: "secreto!!" }));
app.set("view engine", "ejs");

app.listen(3000, () => {
  console.log("Servidor corriendo");
});

app.use("/", router);
app.use("/product", productRouter);
