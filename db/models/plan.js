let mongoose = require("mongoose");
let planSchema = mongoose.Schema({
  classID: String,
  planId: String,
  planDescription: String,
  planStartDate: String,
  planEndDate: String,
  // firstName: String,
  planDuration: String,
  remarks: String
});
let Plan = mongoose.model("plan", planSchema);
module.exports = Plan;
