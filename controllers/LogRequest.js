const Log_request = require('../models/Log_request');
const Tabayun_request = require('../models/Tabayun_request');

class LogRequest {
  constructor() {

  }

  makeLog(data) {
    const log = new Log_request({
      id_tabayun_request: data._id,
      message: "Success"
    });
    log.save(log).then((data) => { return data })
  }

  updatePull(data) {
    Tabayun_request.updateOne({ _id: data }, { pull_status: true }).then(result => { return result })
  }
}

module.exports = new LogRequest()