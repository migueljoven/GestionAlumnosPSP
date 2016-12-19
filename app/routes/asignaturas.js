var express = require('express');
var router = express.Router();
var mysql=require('mysql')
var controladorAsignatura=require('../controllers/asignaturaController');

/*Asignaturas */
router.get('/',controladorAsignatura.getAsignaturas);

router.get('/:codigo', controladorAsignatura.getAsignatura);

router.post('/', controladorAsignatura.postAsignaturas);

router.delete('/:codigo', controladorAsignatura.deleteAsignatura);

router.put('/:codigo', controladorAsignatura.putAsignatura);

module.exports = router;
