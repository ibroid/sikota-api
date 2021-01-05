const Log_request = require('../models/Log_request');
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
}

module.exports = new LogRequest()