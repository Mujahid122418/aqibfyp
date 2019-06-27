let express = require('express');
var cors = require('cors')
let ClassInfo = require('./db/models/users');
let bodyparser = require('body-parser');
require('./db/config');
let server = express();
server.use(bodyparser.json());
server.use(bodyparser.urlencoded({ extended: false }));
server.use(cors());
server.post('/alldataClassinfo', (req, res) => {
  let newdata = JSON.parse(JSON.stringify(req.body))
  var getBody = new ClassInfo(newdata).save();
  res.json(getBody)
  console.log(getBody);

})

server.get('/',(req,res)=>{
res.send('working')})
server.listen(process.env.PORT || 3001, () => {
  console.log('server is running on Localhost:3001');
});