import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import routes from "./src/routes/crmRoutes";

const app = express();
const PORT = 3000;

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/CRMdb", {
  keepAlive: 1,
  useNewUrlParser: true
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.get("/", (req, res) =>
  res.send(`Node and Express server is running on ${PORT}`)
);

app.listen(PORT, () => console.log(`your server is running on port ${PORT}`));
