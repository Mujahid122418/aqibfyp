let mongoose = require("mongoose");

let UserSchema = mongoose.Schema({
  studentId: String,
  classId: String,
  sessionID: String,
  rollNumber: String,
  destination1: String,
  b_from: String,
  fatherName: String,
  fatherCnic: String,
  address: String,
  contact: String,
  remarks: String
});
let User = mongoose.model("user", UserSchema);
module.exports = User;
