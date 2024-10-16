const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv/config");

// midleware
const app = express();
app.use(bodyParser.json());
app.use(cors());

// routes
app.get("/", (req, res) => {
  res.send({message: "this is carwash API"});
});

// port config
const port = 5000;
app.listen(port);
console.log(`Listening on port:${port}`);
