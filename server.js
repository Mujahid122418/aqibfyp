let express = require('express');
var cors = require('cors')
let ClassInfo = require('./db/models/classInfo');
let User = require('./db/models/user');
let Teacher = require('./db/models/teacher');
let Plan = require('./db/models/plan');
let Course = require('./db/models/course');
let Subject = require('./db/models/subject');
let bodyparser = require('body-parser');
require('./db/config');
let server = express();
server.use(bodyparser.json());
server.use(bodyparser.urlencoded({ extended: false }));
server.use(cors());
// get the data of class information component
server.post('/alldataClassinfo', (req, res) => {
  let newdata = JSON.parse(JSON.stringify(req.body))
  var getBody = new ClassInfo(newdata).save();
  res.json(getBody)
  // console.log(getBody);

})
// get the data of User component
server.post('/userData', (req, res) => {
  let newdata = JSON.parse(JSON.stringify(req.body))
  let getBody = new User(newdata).save();
  res.json(getBody);
  // console.log(getBody);
})
// get data of teachers component
server.post('/teacher', (req, res) => {
  let newdata = JSON.parse(JSON.stringify(req.body));
  let getBody = new Teacher(newdata).save();
  res.json(getBody);
  // console.log(getBody);
})
// get plan from plan component
server.post('/plan', (req, res) => {
  let newdata = JSON.parse(JSON.stringify(req.body));
  let getBody = new Plan(newdata).save();
  res.json(getBody);
  console.log(getBody);
})
// get cousre from course component
server.post('/course', (req, res) => {
  let newData = JSON.parse(JSON.stringify(req.body))
  let getBody = new Course(newData).save();
  res.json(getBody);
  // console.log(getBody);
})
// get data from subject
server.post('/subject',(req, res)=>{
  let newData = JSON.parse(JSON.stringify(req.body))
  let newBody = new Subject(newData).save();
  res.json(newBody);
  console.log(newBody);
})

// server.get('/', (req, res) => {
//   res.send('working')
// })
server.listen(process.env.PORT || 3001, () => {
  console.log('server is running on Localhost:3001');
});