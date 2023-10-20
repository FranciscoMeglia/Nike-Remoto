import React from 'react'
import './EachProdView.css'
import { Nav } from '../../Components/Navbar/Nav'
import { Footer } from '../../Components/Footer/Footer'

export const EachProdView = ({ prod, addToCart, cart , setCart}) => {
  return (
    <div className="eachProdView">
      <Nav cart={cart} setCart={setCart}></Nav>
      <div className="eachProdView-container">
        <div className="eachProdView-container-1" style={{ backgroundImage: `url(${prod.img})` }}>

        </div>
        <div className="eachProdView-container-2">
          <h2>{prod.nombre}</h2>
          <h3>{prod.descripcion}</h3>
          {prod.oferta ?
            <div className='prices'>
              <h3>$ {Math.round(prod.precio * (100 - prod.porcentageOferta) / 100)}</h3>
              <h3 className='disscount'>$ {prod.precio}</h3>
            </div> :
            <div className='prices'>
              <h3>$ {prod.precio}</h3>
            </div>
          }
          <div className="addCart">
            <button onClick={() => { addToCart(prod) }}>ADD TO CART</button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}
