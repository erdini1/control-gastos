import { useState, useEffect } from 'react'

const ControlPresupuesto = ({ gastos, presupuesto }) => {

    //Declaro las variables en de disponible y gastado
    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)

    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0)       //Va a acumular los datos en una sola variable
        const totalDisponible = presupuesto - totalGastado

        setDisponible(totalDisponible)
        setGastado(totalGastado)
    }, [gastos])



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
                    <span>Disponible: </span> {formatearPrespuesto(disponible)}
                </p>
                <p>
                    <span>Gastado: </span> {formatearPrespuesto(gastado)}
                </p>
            </div>

        </div>
    )
}

export default ControlPresupuesto