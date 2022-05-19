const student = require("../../src/json/student.json")

export default function handler(req, res) {
  res.status(200).json(student)
}
