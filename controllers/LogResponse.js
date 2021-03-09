const Log_response = require('../models/Log_response');
const Tabayun_response = require('../models/Tabayun_response');
const Tabayun_request = require('../models/Tabayun_request');

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
  updatePull(data) {
    Tabayun_response.updateOne({ _id: data }, { pull_status: true }).then(result => { return result }).catch(err => { return err })
  }
  async updateResponse(id) {
    Tabayun_request.updateOne({ _id: id }, { response_status: true }).then(result => { return result }).catch(err => { return err })
  }
}

module.exports = new LogResponse()