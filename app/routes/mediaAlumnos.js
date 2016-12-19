var express = require('express');
var router = express.Router();
var mysql=require('mysql')
var controladorAlumno=require('../controllers/alumnoController');

router.get('/', controladorAlumno.getMediaAlumnos);

module.exports = router;