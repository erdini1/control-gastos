import React from 'react'
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions
} from 'react-swipeable-list'
import "react-swipeable-list/dist/styles.css"
import { formatearFecha } from '../helpers'

import IconoAhorro from "../img/icono_ahorro.svg"
import IconoCasa from "../img/icono_casa.svg"
import IconoComida from "../img/icono_comida.svg"
import IconoGastos from "../img/icono_gastos.svg"
import IconoOcio from "../img/icono_ocio.svg"
import IconoSalud from "../img/icono_salud.svg"
import IconoSuscripciones from "../img/icono_suscripciones.svg"

const diccionarioIcono = {
  ahorro: IconoAhorro,
  casa: IconoCasa,
  comida: IconoComida,
  gastos: IconoGastos,
  ocio: IconoOcio,
  salud: IconoSalud,
  suscripciones: IconoSuscripciones
}

const Gasto = ({ gasto, setGastoEditar }) => {
  const { nombre, cantidad, categoria, id, fecha } = gasto

  const leadingActions = () => (  /* Se coloca parentesis para que muestre el siguiente componente */
    <LeadingActions>
      <SwipeAction onClick={() => setGastoEditar(gasto)}>
        Editar
      </SwipeAction>
    </LeadingActions>
  )
  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={() => console.log("Eliminar")}>
        Eliminar
      </SwipeAction>
    </TrailingActions>
  )

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className='gasto sombra'>
          <div className='contenido-gasto'>
            {/* IMAGEN */}
            <img
              src={diccionarioIcono[categoria]}
              alt={`Icono ${diccionarioIcono[categoria]}`}
            />

            <div className='descripcion-gasto'>
              <p className='categoria'>
                {categoria}
              </p>
              <p className='nombre-gasto'>
                {nombre}
              </p>
              <p className='fecha-gasto'>
                Agregado el: {""}
                <span>{formatearFecha(fecha)}</span>
              </p>
            </div>
          </div>
          <p className='cantidad-gasto'>${cantidad}</p>
        </div >
      </SwipeableListItem>
    </SwipeableList >
  )
}

export default Gasto