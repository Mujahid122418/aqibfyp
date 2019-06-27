let mongoose = require('mongoose');
let courseSchema = mongoose.Schema({
  courseId: String,
  classId: String,
  subject1: String,
  teacher1: String,
  subject2: String,
  teacher2: String,
  subject3: String,
  teacher3: String,
  subject4: String,
  teacher4: String,
  subject5: String,
  teacher5: String,
  subject6: String,
  teacher6: String,
  subject7: String,
  teacher7: String,
  subject8: String,
  teacher8: String,
  subject9: String,
  teacher9: String,
  subject10: String,
  teacher10: String,
})
let Course  = mongoose.model('course', courseSchema);
module.exports = Course;