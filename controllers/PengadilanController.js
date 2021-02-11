const Pengadilan = require('../models/Pengadilan')
class PengadilanController {
    constructor() {

    }
    async get(req, res) {
        const result = await Pengadilan.find()
        res.status(200).send({
            status: 200,
            data: result
        })
    }

    insert(req, res) {
        const result = new Pengadilan(req.body)
        result.save().then(value => {
            res.status(200).send({
                status: 200,
                data: value
            })
        })

    }
}

module.exports = new PengadilanController()