const mongoose = require('mongoose');
const validator = require('validator');

const schema = new mongoose.Schema({
  id_tabayun_request: {
    type: Object,
    required: true
  },
  date_added: {
    type: Date,
    default: Date.now()
  },
  message: String
})

const LRmodel = mongoose.model('log_request', schema);
module.exports = LRmodel;