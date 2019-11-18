const express = require("express");
const app = express();

const users = [{ name: "ali" }];

app.get("/users", (req, res) => {
  res.json(users);
});

app.listen(5000);
