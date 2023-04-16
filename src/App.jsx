import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import {generarId} from "./helpers/index"
import IconoNuevogasto from './img/nuevo-gasto.svg'


function App() {

  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)

  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)

  const [gastos, setGastos] = useState([])

  const handleNuevoGasto = () => {
    setModal(true)

    setTimeout(() => {    //cuando pasen los 3 segundos se ejecuta esta linea
      setAnimarModal(true)
    }, 500)
  }

  const guardarGasto = gasto => { //Va a tomar un objeto de gasto
    gasto.id = generarId()
    setGastos([...gastos, gasto])

    setAnimarModal(false) //Esto es para que se cierre una vez que cargo los datos

    setTimeout(() => {
      setModal(false)
    }, 500)


  }

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
            onClick={handleNuevoGasto}
          />
        </div>
      )}

      {modal &&
        <Modal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGasto={guardarGasto}
        />}



    </>
  )
}

export default App
