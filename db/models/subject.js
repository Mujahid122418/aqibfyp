let mongoose = require('mongoose');

let subjectSchema = mongoose.Schema({
  subjectId: String,
  subjectName: String,
  numberOfLession: String,
  description: String,
})
let Subject = mongoose.model('subject', subjectSchema);
module.exports = Subject;