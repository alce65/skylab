/* eslint-disable no-unused-vars */

const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')

const tareasRoutes = require('./routes/tareas.routes')

require('./db')

app.use(morgan('dev'))

app.use(express.json())
app.use(express.urlencoded({
	extended: true
}))

app.use(cors())

app.use('/tareas', tareasRoutes)

app.use((req, res, next) => {
	const error = new Error('Not found')
	error.status = 404
	next(error)
})
	
app.use((error, req, res, next) => {
	res.status(error.status || 500)
	res.json({
		error: {
			message: error.message,
		},
	})
})

module.exports = app