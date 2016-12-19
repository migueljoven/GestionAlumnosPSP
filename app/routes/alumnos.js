var express = require('express');
var router = express.Router();
var mysql=require('mysql')
var controladorAlumno=require('../controllers/alumnoController');

/*Alumnos*/
router.get('/', controladorAlumno.getAlumnos);

router.get('/:dni', controladorAlumno.getAlumno);

router.post('/', controladorAlumno.postAlumnos);

router.delete('/:dni', controladorAlumno.deleteAlumno);

router.put('/:dni', controladorAlumno.putAlumno);

module.exports = router;