var express = require('express');
var router = express.Router();
var mysql=require('mysql')


var controlador = require('../controllers/main');


/*index*/
router.get('/', controlador.index);

module.exports = router;
