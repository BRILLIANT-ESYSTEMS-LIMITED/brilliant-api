// const students = require("../../src/json/students.json")
import { faker } from '@faker-js/faker';

export default function handler(req, res) {
  var students = [];

  for (var i = 0; i < 100; i++) {
    students.push({
      sn: i,
      name: faker.name.findName(),
      regno: faker.random.number()
    });
  }
  res.status(200).json(students)
}
