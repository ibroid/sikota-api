const Log_response = require('../models/Log_response');

class LogResponse {
  constructor() {

  }
  makeLog(data) {
    const log = new Log_response({
      id_tabayun_response: data._id,
      message: "Success"
    });
    log.save(log).then((data) => { return data }).catch(err => { return err })
  }

}

module.exports = new LogResponse()