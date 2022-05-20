const mongojs = require("mongojs");

// "mongodb+srv://admin:13131@cluster0.b7zq8.mongodb.net/qrpay"

const db = mongojs('mongodb://127.0.0.1:27017/brilliant');
// const _bills = db.collection("_bills");

let respJson = require(`../../src/json/students.json`);

export default function handler(req, res) {
  var obj = { ...req.body, ...respJson };

  
  db.students.insert(respJson.students, function (err, doc) {
    // console.log(doc._id);
    if (err) throw err;
  });
  

  res.status(200).json(respJson);
}
