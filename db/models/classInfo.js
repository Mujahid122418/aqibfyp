let mongoose = require("mongoose");

let userSchemaClassinfo = mongoose.Schema({
  name: { type: String, require: true },
  password:{ type: String, require: true },
  classLevel:{ type: String, require: true },
  remarks: { type: String, require: true },
  classId: { type: String, require: true },
  sectionName:{ type: String, require: true },
  sectionStudent:{ type: String, require: true },
  sectionRemarks: { type: String, require: true },
});
let ClassInfo = mongoose.model("classinfo", userSchemaClassinfo);
module.exports = ClassInfo;
