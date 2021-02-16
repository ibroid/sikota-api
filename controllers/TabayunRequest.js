const Tabayun_request = require('../models/Tabayun_request');
const LogRequest = require('../controllers/LogRequest');

class TabayunRequest {
  constructor() {

  }
  static async all() {
    const result = await Tabayun_request.find()
    res.status(200).json({
      status: 200,
      data: result
    })
  }
  static reciveData(req, res) {
    if (!req.body) {
      res.status(400).send({
        status: 400, message: "Request Body is Missing", data: null, icon: 'error'
      });
      return false;
    }
    const data = new Tabayun_request(req.body)
    data.save(data).then((data) => {
      res.status(200).send({
        status: 200,
        message: "Tabayun Berhasil Di Kirim",
        data: data,
        icon: 'success',
        info: LogRequest.makeLog(data)
      })
    }).catch((err) => {
      res.status(500).send({
        status: 500, message: 'Gagal di Kirim : ' + err, data: null, icon: 'error'
      })
    })
  }
  static sendData(req, res) {
    Tabayun_request
      .find({
        id_pn_tujuan: req.body.identity_id
      }).where({ pull_status: false })
      .then(doc => {
        if (doc.length === 0) {
          res.json({
            status: 404,
            message: 'Data Tidak Ada',
            data: null,
            icon: 'error'
          })
        } else {
          for (let i = 0; i < doc.length; i++) {
            const element = doc[i];
            if (element.pull_status == false) {
              LogRequest.updatePull(element._id)
            }
          }
          res.json({
            status: 200,
            message: 'Data Berhasil di Tambahkan',
            data: doc,
            icon: 'success'
          })
        }
      })
      .catch(err => {
        res.json({
          status: 404,
          message: "Terjadi Kesalahan :" + err,
          data: null,
          icon: 'error'
        })
      })
  }
}

module.exports = TabayunRequest;