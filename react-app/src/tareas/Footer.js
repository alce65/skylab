import { useState, useEffect } from 'react'

export function Footer({applyFilter}) {

	const filtros = ['Todas', 'Completas', 'Activas']

	const [filtroActivo, setFiltroActivo] = useState('Todas')
	useEffect(() => {
		setFiltroActivo('Todas')
		document.querySelectorAll('[name="filtros"]')[0].setAttribute('checked', true)
	}, [])

	useEffect(() => {
		applyFilter(filtroActivo)
	}, [filtroActivo])
	
	const onChangeFiltro = (event) => {
		setFiltroActivo(event.target.value)
	}

	const onClickBorrarTodos = () => {
		// modal confirm
	}
	console.log('Filtro', filtroActivo)
	return (
		<div className="footer">
			<div className="filtros">
				<span>
					Filtros: 
				</span>
				<div className="form-check form-check-inline">
					{filtros.map(
						(filtro) => {
							return (
							<label className="form-check-label" key={filtro}>
								<input className="form-check-input"
								type="radio" name="filtros" 
								value={filtro} onChange={onChangeFiltro}/>
								{/* [formControl]="fcFiltro" [value]="filtro"> */}
								<span>{filtro}</span>
							</label>
							)	
						}
					)}

				</div>
				<button type="button" className="btn btn-primary btn-sm" 
					onClick={onClickBorrarTodos}>
					Borrar Todas
				</button>
			</div>

			<template id="confirm" let-modal>
				<div className="modal-header">
					<p>¿Esta seguro de que desea borrar todas las tareas?</p>
				</div>
				<div className="modal-footer">
					<button type="button" className="btn btn-outline-dark" 
						onClick="modal.close('Cancel')">
						Cancelar
					</button>
					<button type="button" className="btn btn-outline-dark" 
						onClick="modal.close('Confirm')">
						Confirmar
					</button>
				</div>
			</template>
		</div>
	)
	
}