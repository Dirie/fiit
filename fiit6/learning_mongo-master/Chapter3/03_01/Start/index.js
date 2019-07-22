var MongoClient = require("mongodb").MongoClient;
var m = require("mongodb").MongoClient;

// console.log(m);
const url = "mongodb://localhost:27017/learning_mongo";

var findDocument = (db, callback) => {
  var collection = db.collection("tours");
  collection.find().toArray((err, doc) => {
    console.log(doc);
    callback;
  });
};

m.connect(url, function(err, db) {
  console.log("connected successfully to the server!");
  findDocument(db, function() {
    db.close();
  });
});
