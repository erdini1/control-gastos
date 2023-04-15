import { useState } from 'react'
import Mensaje from './Mensaje'

const NuevoPresupuesto = ({
  presupuesto,
  setPresupuesto,
  isValidPresupuesto,
  setIsValidPresupuesto 
}) => {

  const [mensaje, setMensaje] = useState("")

  const handlePresupuesto = (e) => {   //Asi se llaman las funciones para adminsitrar en react
    e.preventDefault()  //Esto hace que el evento que debe ocurrir no ocurra, es decir que el formulario no se envie cuando presione el boton

    if (!(presupuesto) || (presupuesto) <= 0) {
      setMensaje("NO es un presupuesto valido")

      return
    }

    setMensaje("")
    setIsValidPresupuesto(true)



  }

  return (
    <div className='contenedor-presupuesto contenedor sombra'>


      <form onSubmit={handlePresupuesto} className='formulario'>
        <div className='campo'>
          <label htmlFor="">Defina su presupesto</label>

          <input
            type="number"
            className='nuevo-presupuesto'
            placeholder='Añade tu presupuesto'
            value={presupuesto}
            onChange={e => setPresupuesto(Number(e.target.value))}  //Esto es para el que vaya escribiendo se vaya completando en la variable setpresupuesto
          />
        </div>

        <input
          type="submit"
          value="Añadir"
        />

        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

      </form>


    </div>
  )
}

export default NuevoPresupuesto