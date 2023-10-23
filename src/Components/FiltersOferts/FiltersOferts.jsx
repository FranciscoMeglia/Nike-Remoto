import React from 'react'
import './FiltersOferts.css'
import { CarrouselOferts } from '../CarrouselOferts/CarrouselOferts'

export const FiltersOferts = ({ setTypeProduct, setSize, setPrice, setGender }) => {

    const changeValueProduct = (e) => {

        setTypeProduct(e.target.value)
    }

    const changeValuePrice = (e) => {
        setPrice(e.target.value)
    }

    const changeValueGender = (e) => {
        setGender(e.target.value)
    }


    return (
        <div>
            <CarrouselOferts></CarrouselOferts>
            <div className="filters">
                <div className="filters-typeOfProducts">
                    <h3>Tipo de Producto</h3>
                    <select name="typeProduct" id="typeProduct" onChange={changeValueProduct}>
                        <option value="todo">TODOS</option>
                        <option value="zapatilla">ZAPATILLAS</option>
                        <option value="remera" >REMERAS</option>
                        <option value="pantalon">PANTALONES</option>
                        <option value="buzo">BUZOS</option>
                    </select>
                </div>
                <div className="filters-typeOfProducts">
                    <h3>Género</h3>
                    <select name="" id="" onChange={changeValueGender}>
                        <option value="todo">TODOS</option>
                        <option value="hombre">HOMBRE</option>
                        <option value="mujer">MUJER</option>
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
            <div className='line-division'>
                <hr />
            </div>
        </div>
    )
}
