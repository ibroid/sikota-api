const router = require('express').Router();
const TabayunRequest = require('../controllers/TabayunRequest');
const TabayunResponse = require('../controllers/TabayunResponse');
const Surat = require('../controllers/Surat')

router.post('/tabayun/request', TabayunRequest.reciveData)
router.post('/tabayun/upload_file_request', Surat.uploadSuratRequest)
router.post('/tabayun/get_file_request', Surat.getSuratRequest)
router.post('/tabayun/get_request', TabayunRequest.sendData)

router.post('/tabayun/response', TabayunResponse.retriveData)
router.post('/tabayun/upload_file_response', Surat.uploadSuratResponse)

router.get('/test', (req, res) => {
  res.json({
    message: "SUCCESS"
  })
})

module.exports = router;