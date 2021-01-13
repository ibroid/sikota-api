const Log_request = require('../models/Log_request');
const Log_file = require('../models/Log_file')
const Tabayun_request = require('../models/Tabayun_request');

class LogRequest {
  constructor() {

  }
  makeLog(data) {
    const log = new Log_request({
      id_tabayun_request: data._id,
      message: "Success"
    });
    log.save(log).then((data) => { return data }).catch(err => { return err })
  }
  updatePull(data) {
    Tabayun_request.updateOne({ _id: data }, { pull_status: true }).then(result => { return result }).catch(err => { return err })
  }
  logFile(filename, message) {
    const log = new Log_file({
      file_name: filename,
      message: message
    })
    log.save(log).then((data) => { return data }).catch(err => { return err })
  }
}

module.exports = new LogRequest()