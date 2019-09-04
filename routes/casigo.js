var express = require('express');
var casigo = require('../models/casigo');
var router = express.Router();


router.post('/', casigo.casigo);
router.get('/sDAGpixel', casigo.sDAGpixel);
router.get('/sDAGinfo', casigo.sDAGinfo);
router.post('/sDAGdecode', casigo.sDAGdecode);
router.post('/sDAGinput', casigo.sDAGinput);
router.post('/sDAGprice', casigo.sDAGprice);
router.post('/sDAGbuyCoordinator',casigo.sDAGbuyCoordinator);
router.post('/sDAGsymbol',casigo.sDAGsymbol);
module.exports = router;
