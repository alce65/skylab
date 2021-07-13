export function Home() {
	const title = 'Home'
	return (
		<div>
			<h2>{ title }</h2>
			<p>Ejemplo de Gestión de tareas!</p>
			{
			/* <p>Disponible en dos versiones:</p>
			<ul>
				<li>Como servicio con el estado de la aplicació</li>
				<li>usando el patrón redux en la librería @ngrx</li>
			</ul> */
			}
			<p>El backend correspondiente debe estar en localhost:3000</p>
		</div>
	)
}