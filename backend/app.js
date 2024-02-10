const express = require("express");

const cookieParser = require("cookie-parser");

const app = express();

const bodyParser = require("body-parser");
const fileupload = require("express-fileupload");

const path = require("path");

const errorMiddleware = require("./middleware/error");

//Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "backend/config/config.env",
  });
}

app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileupload());
app.use(bodyParser.json());
app.use(express.urlencoded({ limit: "50mb" }));

//Route Import
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoutes");
const payment = require("./routes/paymentRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", payment);

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

//Middlewware for errors
app.use(errorMiddleware);

module.exports = app;
