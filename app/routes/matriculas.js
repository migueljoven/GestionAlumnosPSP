var express = require('express');
var router = express.Router();
var mysql=require('mysql')
var controladorMatricula=require('../controllers/matriculaController');

/*Matriculas */
router.get('/',controladorMatricula.getMatriculas);

router.get('/:dni_alumno', controladorMatricula.getMatricula);

router.post('/', controladorMatricula.postMatriculas);

router.delete('/:dni_alumno/:codigo_asignatura/:fecha', controladorMatricula.deleteMatricula);

router.put('/:dni_alumno/:codigo_asignatura/:fecha', controladorMatricula.putMatricula);

module.exports = router;