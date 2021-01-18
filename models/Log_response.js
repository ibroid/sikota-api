const mongoose = require('mongoose');
const validator = require('validator');

const schema = new mongoose.Schema({
  id_tabayun_response: {
    type: Object,
    required: true
  },
  date_added: {
    type: Date,
    default: Date.now()
  },
  message: String
})

const LRmodel = mongoose.model('log_response', schema);
module.exports = LRmodel;