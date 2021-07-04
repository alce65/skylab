/* eslint-disable no-unused-vars */

const mongoose = require('mongoose')
const Tarea = require('../models/tarea.model')

// titulo: { type: String, required: true },
// responsable: { type: String, required: true },
// fecha:  { type: Date, required: true },
// isCompleted

exports.getAllTareas = (req, res, next) => {
	const url_base = req.protocol + '://' + req.get('host') + '/tareas'
	Tarea.find()
		.select('titulo responsable fecha isCompleted _id')
		.exec()
		.then(docs => {
			const response = {
				count: docs.length,
				tareas: docs.map(doc => {
					return {
						titulo: doc.titulo,
						responsable: doc.responsable,
						fecha: doc.fecha,
						isCompleted: doc.isCompleted,
						_id: doc._id,
						request: {
							type: 'GET',
							url: url_base + '/' + doc._id
						}
					}
				})
			}
			if (docs.length >= 0) {
				res.status(200).json(response)
			} else {
				res.status(204).json({
					message: 'No entries found'
				})
			}
		})
		.catch(err => {
			console.log(err)
			res.status(500).json({
				error: err
			})
		})
}

exports.createTarea = (req, res, next) => {
	const url_base = req.protocol + '://' + req.get('host') + '/tareas'
	const tarea = new Tarea({
		_id: new mongoose.Types.ObjectId(),
		titulo: req.body.titulo,
		responsable: req.body.responsable,
		fecha: new Date(req.body.fecha)
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
					fecha: result.fecha,
					isCompleted: result.isCompleted,
					_id: result._id,
					request: {
						type: 'GET',
						url: url_base + '/' + result._id,
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
}

exports.getTarea = (req, res, next) => {
	const url_base = req.protocol + '://' + req.get('host') + '/tareas'
	const id = req.params.tareaID
	Tarea.findById(id)
		.select('titulo responsable fecha isCompleted _id')
		.exec()
		.then(doc => {
			console.log('From database', doc)
			if (doc) {
				res.status(200).json({
					product: doc,
					request: {
						type: 'GET',
						url: url_base
					}
				})
			} else {
				res
					.status(204)
					.json({ message: 'Tarea no encontrada' })
			}
		})
		.catch(err => {
			console.log(err)
			res.status(500).json({ error: err })
		})
}

exports.updateTarea = (req, res, next) => {
	const url_base = req.protocol + '://' + req.get('host') + '/tareas'
	const id = req.params.tareaID
	const updateOps = {}
	for (const ops of req.body) {
		updateOps[ops.propName] = ops.value
	}
	Tarea.update({ _id: id }, { $set: updateOps })
		.exec()
		.then(result => {
			res.status(202).json({
				message: 'Tarea actualizada',
				request: {
					type: 'GET',
					url: url_base + '/' + id
				}
			})
		})
		.catch(err => {
			console.log(err)
			res.status(500).json({
				error: err
			})
		})
}

exports.deleteTarea = (req, res, next) => {
	const url_base = req.protocol + '://' + req.get('host') + '/tareas'
	const id = req.params.tareaID
	Tarea.remove({ _id: id })
		.exec()
		.then(result => {
			res.status(200).json({
				message: 'Tarea eliminada',
				request: {
					type: 'GET',
					url: url_base
				}
			})
		})
		.catch(err => {
			console.log(err)
			res.status(500).json({
				error: err
			})
		})
}