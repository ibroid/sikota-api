const router = require('express').Router();
const TabayunRequest = require('../controllers/TabayunRequest');

router.post('/tabayun/request', TabayunRequest.reciveData)
router.post('/tabayun/get_request', TabayunRequest.sendData)
router.get('/test', (req, res) => {
  res.json({
    message: "SUCCESS"
  })
})

module.exports = router;