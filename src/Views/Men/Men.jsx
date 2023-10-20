import React from 'react'
import './Men.css'
import { Nav } from '../../Components/Navbar/Nav'
import { Card } from '../../Components/Card/Card'
import { Footer } from '../../Components/Footer/Footer'
import { useState } from 'react'
import { Filters } from '../../Components/Filters/Filters'

export const Men = ({dataApi , cart , setCart }) => {

  const [data, setData] = useState([])
  const [typePorduct , setTypeProduct] = useState("todo")
  const [size , setSize] = useState()
  const [price , setPrice] = useState()

  dataApi().then(prod => setData(prod))

  return (
    <section className="men">
      <Nav cart={cart} setCart={setCart}></Nav>
      <div className="men-filters">
        <Filters setTypeProduct={setTypeProduct} setPrice={setPrice} setSize={setSize}></Filters>
      </div>
      <div className="men-container">
        {data.filter((prod) => prod.genero === "hombre").filter((prod) =>  typePorduct === "todo" ? prod : prod.tipo === typePorduct).sort((a , b) => price === "mayor" ? b.precio - a.precio : a.precio - b.precio).map((prod) => {
          if (prod.oferta) {

            const resto = (prod.precio * prod.porcentageOferta) / 100;
            const nuevoPrecio = prod.precio - resto;

            return <Card titulo={prod.nombre} img={prod.img} subtitulo={prod.descripcion} precio={"$" + prod.precio} precioOferta={"$" + Math.round(nuevoPrecio)}></Card>
          } else {
            return <Card titulo={prod.nombre} img={prod.img} subtitulo={prod.descripcion} precioOferta={"$" + prod.precio}></Card>
          }
        })} 
      </div>
      <Footer></Footer>
    </section>
  )
}
