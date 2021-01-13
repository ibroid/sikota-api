const LogRequest = require('../controllers/LogRequest');
const Request_file = require('../models/Request_file')
class Surat {
  constructor() { }
  uploadSuratRequest(req, res) {
    const allowFormat = ['image/jpg', 'image/jpeg', 'application/pdf', 'application/rtf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const allowSize = 3410285;
    console.log(req.files);
    if (allowFormat.indexOf(req.files.doc.mimetype).toString() == '-1') {
      res.status(403).json({
        status: 403,
        message: 'Format File is Forbidden',
        log: LogRequest.logFile(req.files.doc.name, 'Format File is Forbidden')
      })
    } else if (req.files.size > allowSize) {
      res.status(403).json({
        status: 403,
        message: 'File Size is Forbidden',
        log: LogRequest.logFile(req.files.doc.name, 'File Size is Forbidden')
      })
    } else {
      req.files.doc.mv(__dirname.replace('controllers', '') + '/uploads/request/' + req.files.doc.name, (err) => {
        if (err) res.status(500).send(err)
        const model = new Request_file({
          file_name: req.files.doc.name,
          tabayun_request_id: req.body.data
        })
        model.save(model).then(result => {
          res.status(200).json({
            status: 200,
            message: 'success',
            data: result
          })
        }).catch(err => res.status(500).json({ status: 500, message: err }))
      })
    }
  }
  getSuratRequest(req, res) {
    Request_file.findOne({
      tabayun_request_id: req.body.tabayun_request_id
    }, (err, data) => {
      if (err) res.status(404).send({ status: 404, message: 'File not Found' });
      res.status(202).send({
        status: 200,
        message: 'File Ditemukan',
        data: data
      })
    })
  }


}

module.exports = new Surat()