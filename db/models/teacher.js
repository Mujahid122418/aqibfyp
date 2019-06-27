let mongoose = require('mongoose');
let teacherSchema = mongoose.Schema({
  name: String,
  teacherId: String,
  qualification: String,
  experience: String,
  joiningDate: String,
  subject1: String,
  subject2: String,
  subject3: String,
  subject4: String,
  subject5: String,
  classID: String,
  remarks: String

})
let Teacher = mongoose.model('teacher', teacherSchema);
module.exports = Teacher;