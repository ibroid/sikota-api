const mongoose = require('mongoose');
const validator = require('validator');

const schema = new mongoose.Schema({
  file_name: {
    type: String,
  },
  date_added: {
    type: Date,
    default: Date.now()
  },
  message: String
})

const LFmodel = mongoose.model('Log_file', schema);
module.exports = LFmodel;