const Tabayun_request = require('../models/Tabayun_request')
const Tabayun_response = require('../models/Tabayun_response')

class Delegasi {
  constructor() {}

  async masuk(req, res) {
    res.send({
      data: await Tabayun_request.find({
        id_pn_tujuan : req.params.id
      })
    })
  }
  async keluar(req, res) {
    res.send({
      data: await Tabayun_request.find({
        id_pn_asal : req.params.id
      })
    })
  }
}

module.exports = new Delegasi()