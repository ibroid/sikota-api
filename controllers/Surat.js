const LogRequest = require('../controllers/LogRequest');
const Request_file = require('../models/Request_file');
const Response_file = require('../models/Response_file');      
class Surat {
  constructor() { }
  uploadSuratRequest(req, res) {
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
			data: result})
		}).catch(err => res.status(500).json({ status: 500, message: err }))
	})
  }
  getSuratRequest(req, res) {
    Request_file.find({
      tabayun_request_id: '"'+ req.body.tabayun_request_id + '"'
    }, (err, data) => {
      if (err) res.status(404).send({ status: 404, message: 'File not Found' });
      res.status(202).send({
        status: 200,
        message: 'File Ditemukan',
        data: data
      })
    })
  }
  uploadSuratResponse(req, res) {
    req.files.doc.mv(__dirname.replace('controllers', '') + '/uploads/response/' + req.files.doc.name, (err) => {
      if (err) res.status(500).send(err)
      const model = new Response_file({
        file_name: req.files.doc.name,
        tabayun_response_id: req.body.data.replace('"','').replace('"','')
      })
      model.save(model).then(result => {
        res.status(200).json({
        status: 200,
        message: 'success',
        data: result})
      }).catch(err => res.status(500).json({ status: 500, message: err }))
    })
  }

  async getSuratResponse(req, res) {
    const result = await Response_file.find({
      tabayun_response_id: req.body.id
    })
    if(!result) res.status(500).send({status: 500, data: null});
    res.status(200).json({
      status: 200,
      data: result
    })
  }
} 

module.exports = new Surat()