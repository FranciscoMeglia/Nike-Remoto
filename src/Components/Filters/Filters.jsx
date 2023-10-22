import React from 'react'
import './Filters.css'
import { CarrouselOferts } from '../CarrouselOferts/CarrouselOferts'

export const Filters = ({setTypeProduct , setSize , setPrice}) => {

    const changeValueProduct = (e) => {

        setTypeProduct(e.target.value)
    }

    const changeValuePrice = (e) => {
        setPrice(e.target.value)
    }
    

  return (

    <div className='contenedor-filters'>
        <CarrouselOferts></CarrouselOferts>
        <div className="filters">
            <div className="filters-typeOfProducts">
                <h3>Tipo de Producto</h3>
                <select name="typeProduct" id="typeProduct" onChange={changeValueProduct}>
                    <option value="todo">TODOS</option>
                    <option value="zapatilla" >ZAPATILLAS</option>
                    <option value="remera" onClick={(e) => {setTypeProduct(e.target.value)}}>REMERAS</option>
                    <option value="pantalon" onClick={(e) => {setTypeProduct(e.target.value)}}>PANTALONES</option>
                    <option value="buzo" onClick={(e) => {setTypeProduct(e.target.value)}}>BUZOS</option>
                </select>
            </div>
            <div className="filters-typeOfProducts">
                <h3>Precio Mayor/Menor</h3>
                <select name="" id="" onChange={changeValuePrice}>
                    <option id='menor-mayor' value="menor">MENOR/MAYOR</option>
                    <option id='menor-mayor' value="mayor">MAYOR/MENOR</option>
                </select>
            </div>
        </div>
        <div className='linea-divisoria'>
            <hr />
        </div>
    
    </div>
  )
}
