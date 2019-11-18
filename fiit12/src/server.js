import express from "express";
var path = require("path");
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("server is working");
});
app.post("/hello", () => {
    
})
app.get("/:name", function(req, res, next) {
  var options = {
    root: path.join(__dirname, ""),
    dotfiles: "deny",
    headers: {
      "x-timestamp": Date.now(),
      "x-sent": true
    }
  };

  var fileName = req.params.name;

  res.sendFile(fileName, options, function(err) {
    if (err) {
      next(err);
    } else {
      console.log("Sent:", fileName);
    }
  });
});
app.listen(2000, () => console.log(" server is listening port 20000"));
