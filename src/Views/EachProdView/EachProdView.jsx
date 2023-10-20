import React from 'react'
import './EachProdView.css'
import { Nav } from '../../Components/Navbar/Nav'
import { Footer } from '../../Components/Footer/Footer'

export const EachProdView = ({prod , addToCart , cart}) => {
  return (
    <div className="eachProdView">
      <Nav cart={cart}></Nav>
      <div className="eachProdView-container">
        <div className="eachProdView-container-1" style={{backgroundImage: `url(${prod.img})`}}>

        </div>
        <div className="eachProdView-container-2">
          <h2>{prod.nombre}</h2>
          <h3>{prod.descripcion}</h3>
          <h3>$ {prod.precio}</h3>
          <div className="addCart">
            <button onClick={() => {addToCart(prod)}}>ADD TO CART</button>
          </div>  
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}
