var express = require('express');
var router = express.Router();
var mysql=require('mysql')
var controladorAlumno=require('../controllers/alumnoController');

router.get('/:dni', controladorAlumno.mediaAlumno);

module.exports = router;