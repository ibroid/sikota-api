const router = require('express').Router();
const TabayunRequest = require('../controllers/TabayunRequest');
const TabayunResponse = require('../controllers/TabayunResponse');
const Surat = require('../controllers/Surat')
const FileValidator = require('../middleware/FileValidator');

router.post('/tabayun/request', TabayunRequest.reciveData)
router.post('/tabayun/upload_file_request', Surat.uploadSuratRequest)
router.post('/tabayun/get_file_request', Surat.getSuratRequest)
router.post('/tabayun/get_request', TabayunRequest.sendData)

router.post('/tabayun/response', TabayunResponse.retriveData)
router.post('/tabayun/upload_file_response' ,Surat.uploadSuratResponse)
router.post('/tabayun/get_response', TabayunResponse.sendData);
router.post('/tabayun/get_file_response', Surat.getSuratResponse)

router.get('/test', (req, res) => {
  res.json({
    message: "SUCCESS"
  })
})

module.exports = router;