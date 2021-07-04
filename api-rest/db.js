const mongoose = require('mongoose')
const { MONGO_ATLAS_URI, MONGO_ATLAS_URI_TEST, NODE_ENV} = process.env
const urlConnect = NODE_ENV === 'testing' ?
	MONGO_ATLAS_URI_TEST : MONGO_ATLAS_URI


mongoose.connect(urlConnect, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true
}).then(() => console.log('Mongo Conexion Ok'))
	.catch(err => console.log('Error', err))