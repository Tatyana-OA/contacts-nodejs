const express = require("express");
const dotenv = require("dotenv").config();

const port = process.env.PORT || 5000;

const app = express();

app.get("/api/contacts", (req, res) => {
  res.json({ message: "Get all contacts" });
});

app.listen(port, () => {
  console.log("Server running on port " + port);
});
