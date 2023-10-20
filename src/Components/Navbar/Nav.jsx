import React, { useState } from 'react'
import './Nav.css'
import logoNike from '../../assets/20602d43cc993811e5a6bd1886af4f33.png'
import { Link } from 'react-router-dom'

export const Nav = ({cart}) => {


  return (
    <nav className="nav">
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
        <div className="nav-cart">
            <img src="https://cdn-icons-png.flaticon.com/512/4021/4021651.png" alt="cart icon" />
            <p>{cart.length}</p>
        </div>
    </nav>
  )
}
