const Tabayun_response = require('../models/Tabayun_response')
const Surat = require('../controllers/Surat')
const LogResponse =  require('../controllers/LogResponse')
class TabayunResponse {
    constructor(){}
    retriveData(req, res) {
        if (!req.body) {
            res.status(400).send({
              status: 400, message: "Request Body is Missing", data: null, icon: 'error'
            });
            return false;
          }
        const model = new Tabayun_response(req.body)
        model.save().then((data) => {
            res.status(200).json(
                {
                    status: 200,
                    message: "Data Berhasil di Kirim",
                    data: data,
                    icon: "success",
                    info: LogResponse.makeLog(data)
                }
            )
        } ).catch((err) => {
            res.status(500).json({
                status: 500,
                message: "Gagal :" + err,
                icons: "error", 
            })
        })

    }
}

module.exports = new TabayunResponse()