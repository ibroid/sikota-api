const router = require('express').Router();
const TabayunRequest = require('../controllers/TabayunRequest');
const TabayunResponse = require('../controllers/TabayunResponse');
const Surat = require('../controllers/Surat')
const PengadilanController = require('../controllers/PengadilanController')
const Delegasi = require('../controllers/Delegasi')


router.post('/tabayun/request', TabayunRequest.reciveData)
router.post('/tabayun/upload_file_request', Surat.uploadSuratRequest)
router.post('/tabayun/get_file_request', Surat.getSuratRequest)
router.post('/tabayun/get_request', TabayunRequest.sendData)

router.post('/tabayun/response', TabayunResponse.retriveData)
router.post('/tabayun/upload_file_response', Surat.uploadSuratResponse)
router.post('/tabayun/get_response', TabayunResponse.sendData);
router.post('/tabayun/get_file_response', Surat.getSuratResponse)

router.get('/pengadilan', PengadilanController.get) 
router.post('/pengadilan', PengadilanController.insert)
router.get('/tabayun/request', TabayunRequest.all)
router.get('/tabayun/request/:id', TabayunRequest.detail)

router.get('/request/urgent', TabayunRequest.urgent)
router.get('/request/today', TabayunRequest.today)
router.get('/response/today', TabayunResponse.today)

router.get('/satker/delegasimasuk/:id', Delegasi.masuk)
router.get('/satker/delegasikeluar/:id', Delegasi.keluar)


router.get('/test', (req, res) => {
  res.json({
    message: "SUCCESS"
  })
})

module.exports = router;