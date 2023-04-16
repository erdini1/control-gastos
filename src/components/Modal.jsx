import { useState } from "react"
import Mensaje from "./Mensaje"
import CerrarBtn from "../img/cerrar.svg"

const Modal = ({ setModal, animarModal, setAnimarModal, guardarGasto }) => {

    // asigno las variables de los formularios
    const [nombre, setNombre] = useState("")
    const [cantidad, setCantidad] = useState("")
    const [categoria, setCategoria] = useState("")
    const [mensaje, setMensaje] = useState("")

    const handleSubmit = e => {
        e.preventDefault()

        if ([nombre, cantidad, categoria].includes("")) {
            setMensaje("Todos los campos son obligatorios")

            setTimeout(() => {  //Para que el error se vaya despues de 3 segundos
                setMensaje("")
            }, 3000)
            return
        }
        guardarGasto({nombre, cantidad, categoria})

    }


    const ocultarModal = () => {
        setAnimarModal(false)

        setTimeout(() => {
            setModal(false)
        }, 500)
    }

    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img
                    src={CerrarBtn}
                    alt="Cerrar modal"
                    onClick={ocultarModal}
                />
            </div>

            <form
                onSubmit={handleSubmit}
                className={`formulario ${animarModal ? "animar" : "cerrar"}`}
            > {/* Clases dinamicas */}
                <legend>Nuevo Gasto</legend>

                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

                <div className="campo">
                    <label htmlFor="nombre">Nombre Gasto</label>
                    <input
                        id="nombre"
                        type="text"
                        placeholder="Añade el nombre del gasto"
                        value={nombre} //Esto es para que deje escribir
                        onChange={e => setNombre(e.target.value)} //esto es para asignar el calor al state
                    />
                </div>

                <div className="campo">
                    <label htmlFor="cantidad">Cantidad</label>
                    <input
                        id="cantidad"
                        type="number"
                        placeholder="Añade la cantidad del gasto"
                        value={cantidad}
                        onChange={e => setCantidad(Number(e.target.value))}
                    />
                </div>

                <div className="campo">
                    <label htmlFor="categoria">Categoria</label>

                    <select
                        id="categoria"
                        value={categoria}
                        onChange={e => setCategoria(e.target.value)}
                    >
                        <option value="">-- Seleccione --</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos Varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>

                <input
                    type="submit"
                    value="Añadir gasto"
                />

            </form>

        </div>
    )
}

export default Modal