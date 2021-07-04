/* globals describe, test, expect, afterAll, beforeEach */
const mongoose = require('mongoose')
const supertest = require('supertest')
const { server, app } = require('../server')
const api = supertest(app)
const Tarea = require('../models/tarea.model')

const initialTareas = [
	{
		titulo: 'Aprender FullStack JavaScript',
		responsable: 'Alejandro',
		isComplete: true,
		fecha: new Date()
	},
	{
		titulo: 'Deploy Aplicación ejemplo',
		responsable: 'Ernesto',
		isComplete: false,
		fecha: new Date()
	},
	{
		titulo: 'Otras tareas',
		responsable: 'Elena',
		isComplete: false,
		fecha: new Date()
	}
]

beforeEach(async () => {
	await Tarea.deleteMany({})
	
	for (const item of initialTareas) {
		const newTarea = new Tarea(
			{...item, _id: new mongoose.Types.ObjectId() })	
		await newTarea.save()
	}
})

describe('GET all tasks', () => {
	test('tasks are returned as json', async () => {
		await api
			.get('/tareas')
			.expect(200)
			.expect('Content-Type', /application\/json/)
	})

	test('there are three tasks', async () => {
		const response = await api.get('/tareas')
		expect(response.body.tareas).toHaveLength(initialTareas.length)
	})

	test('Firt task "titulo" is about JavaScript', async () => {
		const response = await api.get('/tareas')
		expect(response.body.tareas[0].titulo).toContain('JavaScript')
	})

})

describe('create a task', () => {
	test('is possible with a valid task', async () => {

		const newTask = {
			titulo: 'Nueva tarea desde POST',
			responsable: 'Celia',
			isComplete: false,
			fecha: new Date()
		}

		const response = await api
			.post('/tareas')
			.send(newTask)
			.expect(201)
			.expect('Content-Type', /application\/json/)
		expect(response.body.createdTask.titulo).toContain('Nueva tarea')
		
	})

	test('is not possible with an invalid task', async () => {
		const newTask = {
			titulo: 'Datos incompletos'
		}

		await api
			.post('/tareas')
			.send(newTask)
			.expect(500)
			.expect('Content-Type', /application\/json/)
	})

})

describe('deleta a task', () => {
	test('is possible with a valid task id', async () => {
	
		let response = await api.get('/tareas')
		let allTaks = response.body.tareas
		const taskToDelete = allTaks[0]._id
		expect(typeof taskToDelete).toBe('string')

		await api
			.delete(`/tareas/${taskToDelete}`)
			.expect(200)

		response = await api.get('/tareas')
		allTaks = response.body.tareas
		expect(allTaks).toHaveLength(initialTareas.length - 1)
	})

	test('is not possible with a in valid task id', async () => {
		const taskToDelete = '100'
		await api
			.delete(`/tareas/${taskToDelete}`)
			.expect(500)
	})
})

describe('update a task', () => {
	test('is possible with a valid data', async () => {

		const newData = [
			{ propName: 'titulo', value: 'Tarea actualizada'}
		]
		let response = await api.get('/tareas')
		let allTaks = response.body.tareas
		const taskToUpdate = allTaks[0]._id
		expect(typeof taskToUpdate).toBe('string')

		response = await api
			.patch('/tareas/'+taskToUpdate)
			.send(newData)
			.expect(202)
			.expect('Content-Type', /application\/json/)

		response = await api.get('/tareas')
		expect(response.body.tareas[0].titulo).toContain('Tarea actualizada')
	})
})

afterAll(() => {
	mongoose.connection.close()
	server.close()
})