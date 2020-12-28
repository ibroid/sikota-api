const Tabayun_request = require('../models/Tabayun_request');

const tabayunrequest = {

  reciveData : function (req, res) {
    if (!req.body) {
      res.status(400).send({
        status: 400, message:"Request Body is Missing", data:null
      });
      return false;
    } 
    const data = new Tabayun_request(req.body)
    data.save(data).then((data) => {
      res.status(200).send({
        status:200, message:"Tabayun successfully Added", data:data
      })
    }).catch((err) => {
      res.status(500).send({
        status:5000, message:err, data:null})
    })
  },

  sendData : function (req, res) {
    Tabayun_request
    .find({
      id_pn_tujuan : req.body.identity_id
    })
    .then(doc => {
      res.json({
        status: 200,
        message: "Get Data Success",
        data: doc
      })
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
module.exports = tabayunrequest;