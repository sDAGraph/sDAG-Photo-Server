var express = require('express');
var casigo = require('../models/casigo');
var router = express.Router();


router.get('/', casigo.casigo);
router.get('/sDAGpixel', casigo.sDAGpixel);
router.get('/sDAGinfo', casigo.sDAGinfo);

module.exports = router;
