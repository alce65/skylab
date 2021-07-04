const mongoose = require('mongoose')
const urlConnect = process.env.MONGO_ATLAS_URI

mongoose.connect(urlConnect, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true
}).then(() => console.log('Mongo Conexion Ok'))
	.catch(err => console.log('Error', err))