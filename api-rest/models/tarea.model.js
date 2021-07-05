const mongoose = require('mongoose')

const TareaSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	titulo: { type: String, required: true },
	responsable: { type: String, required: true },
	fechaInicio:  { type: Date, required: true },
	isCompleted: { type: Boolean, default: false }
})

module.exports = mongoose.model('Tarea', TareaSchema)