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
  tabayun_response_id: Object
})

const RFmodel = mongoose.model('response_file', schema);
module.exports = RFmodel;