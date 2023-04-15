import React from 'react'

const Mensaje = ({children, tipo}) => {
  return (
    <div className={`alerta ${tipo}`}>  {/* esto es para pasar dieferentes tipos. hay una clase que si es alerta error va a mostrar un cartel. pero si no es error no lo muestra*/}
        {children}  {/* children posee el mensaje */}
    </div>
  )
}

export default Mensaje