import React, { useState } from 'react'
import './Nav.css'
import logoNike from '../../assets/20602d43cc993811e5a6bd1886af4f33.png'
import { Link } from 'react-router-dom'
import cartIcon from '../../assets/cart-icon.png'
import trashIcon from '../../assets/trash-icon.webp'

export const Nav = ({ cart, setCart }) => {

  const [showCart, setShowCart] = useState(false)
  const [navMobile, setNavMobile] = useState("nav")

  const removeProduct = (productName) => {
    const index = cart.findIndex((prod) => prod.nombre === productName)
    const updatedCart2 = [...cart.slice(0, index), ...cart.slice(index + 1)];
    setCart(updatedCart2)
  }

  return (
    <nav className={navMobile}>
      <div className="nav-logo">
        <img src={logoNike} alt="nike logo" />
        <Link to={"/"}><h1>NIKE</h1></Link>
      </div>
      <div className="nav-links">
        <ul>
          <li><Link to={"/Ofertas"} className='link'>Ofertas</Link></li>
          <li><Link to={"/Hombre"} className='link'>Hombre</Link></li>
          <li><Link to={"/Mujer"} className='link'>Mujer</Link></li>
        </ul>
      </div>
      {navMobile === "nav" ? <img src="https://cdn.icon-icons.com/icons2/510/PNG/512/navicon-round_icon-icons.com_50087.png" alt="nav icon" className="navBtn" onClick={() => {setNavMobile("navMobile")}}/> : <img src="https://static.thenounproject.com/png/392999-200.png" alt="close icon" className='navClose' onClick={() => {setNavMobile("nav")}}/>}
      <div className="nav-cart">
        <img src={cartIcon} alt="cart icon" onClick={() => { setShowCart(true) }} />
        <p className='cart-number'>{cart.length}</p>
        {showCart ?
          <div className="cart-prods" onMouseLeave={() => { setShowCart(false) }}>
            <h3 className='prod-title'>MI COMPRA</h3>
            <hr />
            {cart.filter((item, index) => { return cart.indexOf(item) === index; })
              .slice(0, 2)
              .map((prod) => {
                return <div className='prod'>
                  <img src={prod.img} alt="img prod" />
                  <div className="info">
                    <h3>{prod.nombre}</h3>
                    <div className="price">
                      <h3>$ {prod.oferta ? Math.round(prod.precio * (100 - prod.porcentageOferta) / 100) : prod.precio}</h3>
                      <h3>x{cart.filter((prod2) => prod2.nombre === prod.nombre).length}</h3>
                      <img src={trashIcon} alt="trash icon" onClick={() => { removeProduct(prod.nombre) }} />
                    </div>
                  </div>
                </div>
              })}
            {cart.length > 0 ? <Link to={"/Carrito"}><button>VER CARRITO</button></Link> : <p>NO HAY PRODUCTOS EN EL CARRITO</p>}
          </div> : ""}
      </div>
    </nav >
  )
}
