import React from 'react'
import './Cart.css'
import { Nav } from '../../Components/Navbar/Nav'
import { Link } from 'react-router-dom'
import trashIcon from '../../assets/trash-icon.webp'
import { CarrouselOferts } from '../../Components/CarrouselOferts/CarrouselOferts'

export const Cart = ({ cart, setCart }) => {

  const removeProduct = (productName) => {

    const index = cart.findIndex((prod) => prod.nombre === productName)

    const updatedCart2 = [...cart.slice(0, index), ...cart.slice(index + 1)];

    setCart(updatedCart2)
  }

  let totalCart = 0;
  let shipPrice = 3240;

  for (let i = 0; i < cart.length; i++) {
    totalCart += cart[i].precio
  }

  return (
    <div className="cart">
      <Nav cart={cart} setCart={setCart}></Nav>
      <div className="carrousel-container">
        <CarrouselOferts></CarrouselOferts>
      </div>
      {cart.length > 0 ?
        <div className="cart-container">
          <div className="products-details">
            <div className="products-details-titles">
              <div className="prod-name">
                <p>PRODUCT</p>
              </div>
              <div className="prod-info">
                <p>PRECIO</p>
                <p>CANTIDAD</p>
                <p>SUBTOTAL</p>
              </div>
            </div>
            {cart.filter((item, index) => { return cart.indexOf(item) === index; })
              .map((prod) => {
                return <div className='prod-card'>
                  <div className="prod-card-name">
                    <Link to={`/producto/${prod.id}/${prod.nombre}`}><img src={prod.img} alt="product img" /></Link>
                    <Link to={`/producto/${prod.id}/${prod.nombre}`}><p>{prod.nombre}</p></Link>
                  </div>
                  <div className="prod-card-info">
                    <p>$ {prod.oferta ? Math.round(prod.precio * (100 - prod.porcentageOferta) / 100) : prod.precio}</p>
                    <p>x{cart.filter((prod2) => prod2.nombre === prod.nombre).length}</p>
                    <p>$ {cart.filter((prod2) => prod2.nombre === prod.nombre).length * (prod.oferta ?  Math.round(prod.precio * (100 - prod.porcentageOferta) / 100) : prod.precio)}</p>
                    <img src={trashIcon} alt="trash icon" onClick={() => { removeProduct(prod.nombre) }} />
                  </div>
                </div>
              })}
          </div>
          <div className="resume">
            <h3>RESUMEN DE COMPRA</h3>
            <div className="resume-subtotal">
              <p>SUBTOTAL</p>
              <p>$ {totalCart}</p>
            </div>
            <div className="resume-ship">
              <p>ENVIO</p>
              <p>$ {totalCart >= 50000 ? 0 : shipPrice}</p>
            </div>
            <div className="resume-total">
              <p>TOTAL</p>
              <p>$ {totalCart >= 50000 ? totalCart : totalCart + shipPrice}</p>
            </div>
            <button>INICIAR PAGO</button>
            <Link to={"/"}>Seguir comprando</Link>
          </div>
        </div>
        :
        <div className='cart-empty'>
          <div className="cart-empty-message">
            <h3>Su carrito esta vacio</h3>
            <p>Para seguir comprando, navegar por las categorías en el sitio, o buscar su producto presione.</p>
            <div className='continue-btn'>
              <Link to={"/"}><button>SEGUIR COMPRANDO</button></Link>
            </div>
          </div>
        </div>}
    </div>
  )
}
