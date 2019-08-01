let express = require("express");
var cors = require("cors");
let ClassInfo = require("./db/models/classInfo");
let User = require("./db/models/user");
let Teacher = require("./db/models/teacher");
let Plan = require("./db/models/plan");
let Course = require("./db/models/course");
let Subject = require("./db/models/subject");
let bodyparser = require("body-parser");
require("./db/config");
let server = express();
server.use(bodyparser.json());
server.use(bodyparser.urlencoded({ extended: false }));
server.use(cors());
// get the data of class information component
server.post("/alldataClassinfo", (req, res) => {
  let newdata = JSON.parse(JSON.stringify(req.body));
  var getBody = new ClassInfo(newdata).save();
  res.json(getBody);
  // console.log(getBody);
});
// show all classinfo on fron end
server.get("/showAllClassInfo", (req, res) => {
  ClassInfo.find({}, function(err, classinfo) {
    res.json(classinfo);
  });
});
// delete classinfo data
server.delete("/deleteuser/:userid", (req, res) => {
  ClassInfo.findOneAndDelete({ _id: req.params.userid }, function(err, users) {
    res.json(users);
  });
});
// update classinfo
server.put("/updateuser/:userid", (req, res) => {
  console.log(req.body);
  ClassInfo.findOneAndUpdate(
    { _id: req.params.userid },
    req.body,
    (err, users) => {
      if (err) {
        res.send(500);
      } else {
        res.json(users);
      }
    }
  );
});
// post the data of User/student component
server.post("/userData", (req, res) => {
  let newdata = JSON.parse(JSON.stringify(req.body));
  let getBody = new User(newdata).save();
  res.json(getBody);
  // console.log(getBody);
});
//show all data of User/student on front
server.get("/showUser", (req, res) => {
  User.find({}, function(err, user) {
    res.json(user);
  });
});
//delete User/student
server.delete("/deletestud/:studentid", (req, res) => {
  User.findOneAndDelete({ _id: req.params.studentid }, function(err, users) {
    res.json(users);
  });
});
// update User/Student
server.put("/updateuserstudent/:userstudent", (req, res) => {
  console.log(req.body);
  User.findOneAndUpdate(
    { _id: req.params.userstudent },
    req.body,
    (err, users) => {
      if (err) {
        res.send(500);
      } else {
        res.json(users);
      }
    }
  );
});
// post data of teachers component
server.post("/teacher", (req, res) => {
  let newdata = JSON.parse(JSON.stringify(req.body));
  let getBody = new Teacher(newdata).save();
  res.json(getBody);
  // console.log(getBody);
});
// show all data of teachers on fronend
server.get("/showTeacher", (req, res) => {
  Teacher.find({}, function(err, teacher) {
    res.json(teacher);
  });
});
// delete teacher
server.delete("/deleteteacher/:teacherid", (req, res) => {
  Teacher.findOneAndDelete({ _id: req.params.teacherid }, function(err, users) {
    res.json(users);
  });
});
// update teacher
server.put("/updateuserteacher/:userteacher", (req, res) => {
  console.log(req.body);
  Teacher.findOneAndUpdate(
    { _id: req.params.userteacher },
    req.body,
    (err, users) => {
      if (err) {
        res.send(500);
      } else {
        res.json(users);
      }
    }
  );
});
// post plan from plan component
server.post("/plan", (req, res) => {
  let newdata = JSON.parse(JSON.stringify(req.body));
  let getBody = new Plan(newdata).save();
  res.json(getBody);
  console.log(getBody);
});

// show all data of plan on frontend
server.get("/showPlan", (req, res) => {
  Plan.find({}, function(err, plan) {
    res.json(plan);
  });
});
// delete plan

server.delete("/deleteplan/:planid", (req, res) => {
  Plan.findOneAndDelete({ _id: req.params.planid }, function(err, users) {
    res.json(users);
  });
});
// update Plan
server.put("/updateuserplan/:userplan", (req, res) => {
  console.log(req.body);
  Plan.findOneAndUpdate(
    { _id: req.params.userplan },
    req.body,
    (err, users) => {
      if (err) {
        res.send(500);
      } else {
        res.json(users);
      }
    }
  );
});
// post cousre from course component
server.post("/course", (req, res) => {
  let newData = JSON.parse(JSON.stringify(req.body));
  let getBody = new Course(newData).save();
  res.json(getBody);
  // console.log(getBody);
});
//show all data of course on foontend
server.get("/showCourse", (req, res) => {
  Course.find({}, function(err, course) {
    res.json(course);
  });
});
// delete Courses
server.delete("/deletecourse/:courseid", (req, res) => {
  Course.findOneAndDelete({ _id: req.params.courseid }, function(err, users) {
    res.json(users);
  });
});
// update course
server.put("/updateusercourse/:usercourse", (req, res) => {
  console.log(req.body);
  Course.findOneAndUpdate(
    { _id: req.params.usercourse },
    req.body,
    (err, users) => {
      if (err) {
        res.send(500);
      } else {
        res.json(users);
      }
    }
  );
});
// post data from subject
server.post("/subject", (req, res) => {
  let newData = JSON.parse(JSON.stringify(req.body));
  let newBody = new Subject(newData).save();
  res.json(newBody);
  console.log(newBody);
});
//Show data of subject on front End
server.get("/showSubject", (req, res) => {
  Subject.find({}, function(err, subjects) {
    res.json(subjects);
  });
});
// delete Subject
server.delete("/deletesub/:subid", (req, res) => {
  Subject.findOneAndDelete({ _id: req.params.subid }, function(err, users) {
    res.json(users);
  });
});
// update Subject
server.put("/updateusersubject/:usersub", (req, res) => {
  console.log(req.body);
  Subject.findOneAndUpdate(
    { _id: req.params.usersub },
    req.body,
    (err, users) => {
      if (err) {
        res.send(500);
      } else {
        res.json(users);
      }
    }
  );
});
// server.get('/', (req, res) => {
//   res.send('working')
// })
server.listen(process.env.PORT || 3001, () => {
  console.log("server is running on Localhost:3001");
});
