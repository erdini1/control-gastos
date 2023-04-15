import { useState } from 'react'
import Header from './components/Header'
import IconoNuevogasto from './img/nuevo-gasto.svg'


function App() {

  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)




  return (
    <>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />

      {isValidPresupuesto && (  //El && es para que si cumple la función lo ejecut
        <div className='nuevo-gasto'>
          <img
            src={IconoNuevogasto}
            alt='icono nuevo gasto'
          />
        </div>
      )}




    </>
  )
}

export default App
