import axios from 'axios'
const urlBase = 'http://localhost:3000/tareas'

/**
 * 
 * @returns promise
 */
export const getAllTareas = () => {
	return axios.get(urlBase).then(
		result => {
			if (result.status === 200) {
				return result.data.tareas
			} else {
				return result
			}
		} 
	).catch(
		error => {
			console.error('Controlled error', error)
		}
	)
}

/**
 * 
 * @param {string} id 
 * @returns promise
 */
export const getTarea = (id) => { 
	return axios.get(urlBase + '/' + id);
}

/**
 * 
 * @param {Tarea} item 
 * @returns promise
 */
export const setTarea = (item) => {
	return axios.post(urlBase, item).then(
		result => {
			if (result.status === 201) {
				return result.data.createdTask
			} else {
				return result
			}
		}
	).catch(
		error => console.error(error)
	)
}

/**
 * 
 * @param {string} id 
 * @param {Array<{propName: string, value: string}>} props 
 * @returns promise
 */
export const updateTarea = (id, props) => {
	return axios.patch(urlBase + '/' + id, props);
}

/**
 * 
 * @param {string} id 
 * @returns promise
 */
export const deleteTarea = (id) => {
	return axios.delete(urlBase + '/' + id);
}