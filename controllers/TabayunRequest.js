const Tabayun_request = require('../models/Tabayun_request');
const LogRequest = require('../controllers/LogRequest')
class TabayunRequest {
  constructor() {

  }
  static reciveData(req, res) {
    if (!req.body) {
      res.status(400).send({
        status: 400, message: "Request Body is Missing", data: null
      });
      return false;
    }
    const data = new Tabayun_request(req.body)
    data.save(data).then((data) => {
      res.status(200).send({
        status: 200,
        message: "Tabayun Berhasil Di Kirim",
        data: data,
        info: LogRequest.makeLog(data)
      })
    }).catch((err) => {
      res.status(500).send({
        status: 500, message: 'Gagal di Kirim : ' + err, data: null
      })
    })
  }
  static sendData(req, res) {
    Tabayun_request
      .find({
        id_pn_tujuan: req.body.identity_id
      })
      .then(doc => {
        if (doc.length === 0) {
          res.json({
            status: 404,
            message: 'Data Tidak Ada',
            data: null
          })
        } else {
          res.json({
            status: 200,
            message: "Get Data Success",
            data: doc
          })
        }
      })
      .catch(err => {
        res.json({
          status: 404,
          message: err,
          data: null
        })
      })
  }
}

module.exports = TabayunRequest;