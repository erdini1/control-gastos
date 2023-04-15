import React from 'react'

const ControlPresupuesto = ({ presupuesto }) => {

    const formatearPrespuesto = (cantidad) => {     //formatea el presupuesto
        return cantidad.toLocaleString('es-AR', {
            style: 'currency',
            currency: 'ARS'
        })
    }


    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <p>Grafica</p>
            </div>
            <div className='contenido-presupuesto'>
                <p>
                    <span>Presupuesto: </span> {formatearPrespuesto(presupuesto)}
                </p>
                <p>
                    <span>Disponible: </span> {formatearPrespuesto(0)}
                </p>
                <p>
                    <span>Gastado: </span> {formatearPrespuesto(0)}
                </p>
            </div>

        </div>
    )
}

export default ControlPresupuesto