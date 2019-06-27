let mongoose = require('mongoose');

let userSchemaClassinfo = mongoose.Schema({
  name: String,
  password: String,
  classLevel: String,
  remarks: String,
})
let ClassInfo = mongoose.model('classinfo', userSchemaClassinfo);
module.exports =  ClassInfo;
