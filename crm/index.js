import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import routes from "./src/routes/crmRoutes";

const app = express();
const PORT = 3000;

mongoose.Promise = global.Promise;
// const url = "mongodb://localhost/CRMdb";
const url =
  "mongodb+srv://abdulrazak:diiriye1992@zeon-m0w0g.mongodb.net/CRMdb?retryWrites=true&w=majority";
mongoose.connect(url, {
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
