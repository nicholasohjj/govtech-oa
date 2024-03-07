const express = require("express");
const cors = require("cors");
const arithmeticRoutes = require("./routes/arithmeticRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json("Hello test!");
});
app.use("/arithmetic", arithmeticRoutes);

module.exports = app;
