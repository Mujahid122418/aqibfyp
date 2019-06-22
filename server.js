let express = require('express');
let bodyparser = require('body-parser');
var cors = require('cors')
let server = express();
let ClassInfo = require('./db/models/users');
require('./db/config');
server.use(bodyparser.urlencoded({extended:false}));
server.use(bodyparser.json());
server.use(cors());
server.post('/alldataClassinfo', (req, res) => {
  console.log(req.body);
  let newdata = {
    name: req.body.name,
    password: req.body.password,
    classLevel: req.body.classLevel,
    remarks: req.body.remarks
  }
  new ClassInfo(newdata).save();
  res.json({ success: true })
  // let newData = new Data(req.body);
  // newData.save((error, datas) => {
  //   res.json(error || datas)
  // })


})
server.listen(process.env.PORT || 9091, () => {
  console.log('server is running on Localhost:9091');
});