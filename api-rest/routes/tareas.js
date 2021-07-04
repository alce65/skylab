/* eslint-disable no-unused-vars */

const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Tarea = require('../models/tarea')

router.get('/', (req, res, next) => {
	res.status(200).json({
		message: 'Get Tareas'
	})
})

router.post('/', (req, res, next) => {
	const tarea = new Tarea({
		_id: new mongoose.Types.ObjectId(),
		titulo: req.body.titulo,
		responsable: req.body.responsable,
	})

	tarea
		.save()
		.then((result) => {
			console.log(result)
			res.status(201).json({
				message: 'Tarea creada con éxito',
				createdProduct: {
					titulo: result.titulo,
					responsable: result.responsable,
					isCompleted: result.isCompleted,
					_id: result._id,
					request: {
						type: 'GET',
						url: 'http://localhost:3000/tareas/' + result._id,
					},
				},
			})
		})
		.catch((err) => {
			console.log(err)
			res.status(500).json({
				error: err,
			})
		})
})

router.get('/:tareaID', (req, res, next) => {
	res.status(200).json({
		message: 'Get Tarea',
		id: req.params.tareaID
	})
})

router.patch('/:tareaID', (req, res, next) => {
	res.status(200).json({
		message: 'Update Tarea',
		id: req.params.tareaID
	})
})

router.delete('/:tareaID', (req, res, next) => {
	res.status(200).json({
		message: 'Delete Tarea',
		id: req.params.tareaID
	})
})

module.exports = router