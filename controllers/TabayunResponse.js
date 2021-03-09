const Tabayun_response = require('../models/Tabayun_response')
const Log_response = require('../models/Log_response')
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
            LogResponse.updateResponse(req.body._id)
            res.status(200).json({
                status: 200,
                message: "Data Berhasil di Kirim",
                data: data,
                icon: "success",
                info: LogResponse.makeLog(data)
            })
        } ).catch((err) => {
            res.status(500).json({
                status: 500,
                message: "Gagal :" + err,
                icons: "error", 
            })
        })

    }
    async sendData(req, res) {
        const result = await Tabayun_response.find({
            id_pn_tujuan: req.body.identity_id,
        }).where({ pull_status : false })
        result.forEach(element => {
            if (element.pull_status == false) {
                LogResponse.updatePull(element);
            }
        });
        res.status(200).send({
            icon: "success",
            status: 200,
            text: "Data Balasan Baru Berhasil ditambahkan",
            data: result
        })
    }
    async today(req, res) {
        const Log = await  Log_response.findOne({
            date_added : {$gte: Date.today()}
        })
        res.status(200).json({
            data:  await Tabayun_response.findById(Log.id_tabayun_response)
        })
    }
}

module.exports = new TabayunResponse()