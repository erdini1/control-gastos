import { useState, useEffect } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

const ControlPresupuesto = ({
    gastos,
    setGastos,
    presupuesto,
    setPresupuesto,
    isValidPresupuesto,
    setIsValidPresupuesto
}) => {

    const [porcentaje, setPorcentaje] = useState(30)
    //Declaro las variables en de disponible y gastado
    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)

    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0)       //Va a acumular los datos en una sola variable
        const totalDisponible = presupuesto - totalGastado

        const porcentajeGastado = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2)

        setDisponible(totalDisponible)
        setGastado(totalGastado)

        setTimeout(() => {
            setPorcentaje(porcentajeGastado)
        }, 700)

    }, [gastos])

    const formatearPrespuesto = (cantidad) => {     //formatea el presupuesto
        return cantidad.toLocaleString('es-AR', {
            style: 'currency',
            currency: 'ARS'
        })
    }

    const handleResetApp = () => {
        const resultado = confirm("¿Deseas reiniciar presupuesto y gastos?")

        if(resultado){
            setGastos([])
            setPresupuesto([])
            setIsValidPresupuesto(false)
        }
    }

    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <CircularProgressbar
                    value={porcentaje}
                    text={`Gastado ${porcentaje}%`}
                    styles={buildStyles({
                        pathColor: porcentaje > 100 ? "#d61717c3" : "#3b82f6",
                        trailColor: "#f5f5f5",
                        pathTransitionDuration: "1.0",
                        textColor: porcentaje > 100 ? "#d61717c3" : "#3b82f6"
                    })}
                />
            </div>
            <div className='contenido-presupuesto'>
                <button
                    className='reset-app'
                    type='button'
                    onClick={handleResetApp}
                >
                    Resetear App
                </button>
                <p>
                    <span>Presupuesto: </span> {formatearPrespuesto(presupuesto)}
                </p>
                <p className={`${disponible < 0 ? "negativo" : ""}`}>
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