/* eslint-disable no-unused-vars */

const express = require('express')
const router = express.Router()

const TareasController = require('../controllers/tarea.controller')

router.get('/', TareasController.getAllTareas)

router.post('/', TareasController.createTarea)

router.get('/:tareaID', TareasController.getTarea)

router.patch('/:tareaID', TareasController.updateTarea)

router.delete('/:tareaID', TareasController.deleteTarea)

module.exports = router