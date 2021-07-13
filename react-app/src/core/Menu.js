import { Link } from "react-router-dom"
import './Menu.css'

export function Menu () {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">home</Link>
				</li>
				<li>
					<Link to="/tareas">tareas</Link>
				</li>
				<li>
					<Link to="/about">about</Link>
				</li>
			</ul>
		</nav>			
	)
}