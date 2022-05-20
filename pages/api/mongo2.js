const mongojs = require("mongojs");

import { faker } from '@faker-js/faker';
// "mongodb+srv://admin:13131@cluster0.b7zq8.mongodb.net/qrpay"

const db = mongojs('mongodb://127.0.0.1:27017/brilliant');

const mongo = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017'

// const _bills = db.collection("_bills");

let respJson = require(`../../src/json/students.json`);

export default function handler(req, res) {
  var obj = { ...req.body, ...respJson };

    let db, jobs


    var students = [];

    for (var i = 0; i < 1000000; i++) {
      students.push({
        sn: i,
        name: faker.name.findName(),
        regno: faker.random.number()
      });
    }

    mongo.connect(
      url,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      (err, client) => {
        if (err) {
          console.error(err)
          return
        }
        db = client.db('brilliant')
        jobs = db.collection('students2')

        jobs.insertMany(students)
      }
    )

  res.status(200).json(respJson);
}
