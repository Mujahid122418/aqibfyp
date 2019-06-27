let mongoose = require('mongoose');

let UserSchema = mongoose.Schema({
  name: String,
  fatherName: String,
  password: String,
  destination: String,
  destination1: String,
  b_from: String,
  class_id: String,
  contact: String,
  remarks: String
})
let User = mongoose.model('user', UserSchema);
module.exports = User