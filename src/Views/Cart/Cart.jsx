import React from 'react'
import './Cart.css'
import { Nav } from '../../Components/Navbar/Nav'

export const Cart = ({cart , setCart }) => {
  return (
    <div className="cart">
      <Nav cart={cart} setCart={setCart}></Nav>
    </div>
  )
}
