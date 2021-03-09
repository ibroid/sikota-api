const Tabayun_request = require('../models/Tabayun_request');
const Tabayun_response = require('../models/Tabayun_response');
const LogRequest = require('../controllers/LogRequest');

class TabayunRequest {
  constructor() {

  }
  static async all(req, res) {
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
  static async today(req, res) {
    res.status(200).json({
      status: 200,
      data : await Tabayun_request.find({
        created : {$gte: Date.today()}
      })
    })
  }
  static async urgent(req, res) {
    const d = new Date(Date.tomorrow())
    res.status(200).json({
      status: 200,
      data : await Tabayun_request.find({
        tgl_sidang : {$gte: d.toYMD()}
      })
    })
  }
  static async detail(req, res) {
    const data = await Tabayun_request.findById(req.params.id)
    res.status(200).json({
      status: 200,
      data: {
        delegasi : data,
        balasan: await Tabayun_response.findOne({
          id_from_client :  data.id_from_client
        })
      }
    })
  }
}

module.exports = TabayunRequest;