export const generateId = (tarea) => {
	const time = (new Date()).getTime()
	const reverse = time.toString().split('').reverse().join('')

	return tarea.titulo[0] +
		tarea.responsable[0] +
		'-' +
		reverse

}