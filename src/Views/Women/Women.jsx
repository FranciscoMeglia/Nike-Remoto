import React from 'react'
import './Women.css'
import { Nav } from '../../Components/Navbar/Nav'
import { Card } from '../../Components/Card/Card'
import { Footer } from '../../Components/Footer/Footer'
import { Filters } from '../../Components/Filters/Filters'
import { useState } from 'react'

export const Women = ({dataApi , cart , setCart }) => {

  const [data, setData] = useState([])
  const [typePorduct , setTypeProduct] = useState("todo")
  const [size , setSize] = useState()
  const [price , setPrice] = useState()

  dataApi().then(prod => setData(prod))

  return (
    <section className="women">
      <Nav cart={cart} setCart={setCart}></Nav>
      <div className="women-filters">
        <Filters setPrice={setPrice} setTypeProduct={setTypeProduct} setSize={setSize}></Filters>
      </div>
      <div className="women-container">
      {data.filter((prod) => prod.genero === "mujer").filter((prod) =>  typePorduct === "todo" ? prod : prod.tipo === typePorduct).sort((a , b) => price === "mayor" ? b.precio - a.precio : a.precio - b.precio).map((prod) => {
          if (prod.oferta) {

            const resto = (prod.precio * prod.porcentageOferta) / 100;
            const nuevoPrecio = prod.precio - resto;

            return <Card titulo={prod.nombre} img={prod.img} subtitulo={prod.descripcion} precio={"$" + prod.precio} precioOferta={"$" + Math.round(nuevoPrecio)} id={prod.id} key={prod.id}></Card>
          } else {
            return <Card titulo={prod.nombre} img={prod.img} subtitulo={prod.descripcion} precioOferta={"$" + prod.precio} id={prod.id} key={prod.id}></Card>
          }
        })} 
      </div>
      <Footer></Footer>
    </section>
  )
}
