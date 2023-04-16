import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({ gastos }) => {
  return (
    <div className='listado-gastos contenedor'>
      <h2>{gastos.length ? "Gastos" : "No hay gastos aun"}</h2>

      {gastos.map( gasto => (
        <Gasto 
          key={gasto.id}
          gasto={gasto}
        />
      ))}    {/* El map si no hay nada no se ejecuta */}
    </div>
  )
}

export default ListadoGastos