const mongoose = require('mongoose');
const validator = require('validator');

const schema = new mongoose.Schema({
  file_name: {
    type: String,
    required: true
  },
  date_added: {
    type: Date,
    default: Date.now()
  },
  tabayun_request_id: String
})

const RFmodel = mongoose.model('request_file', schema);
module.exports = RFmodel;