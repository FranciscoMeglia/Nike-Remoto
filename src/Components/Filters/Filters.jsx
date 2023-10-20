import React from 'react'
import './Filters.css'

export const Filters = ({setTypeProduct , setSize , setPrice}) => {

    const changeValueProduct = (e) => {

        setTypeProduct(e.target.value)
    }

    const changeValuePrice = (e) => {
        setPrice(e.target.value)
    }
    

  return (
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
                <option value="menor">MENOR/MAYOR</option>
                <option value="mayor">MAYOR/MENOS</option>
            </select>
        </div>
    </div>
  )
}
