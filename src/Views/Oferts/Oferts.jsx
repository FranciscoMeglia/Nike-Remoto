import React from 'react'
import './Oferts.css'
import { Nav } from '../../Components/Navbar/Nav'
import { Card } from '../../Components/Card/Card'
import { Footer } from '../../Components/Footer/Footer'
import { useState } from 'react'
import { FiltersOferts } from '../../Components/FiltersOferts/FiltersOferts'

export const Oferts = ({dataApi , cart , setCart }) => {

  const [data, setData] = useState([])
  const [typePorduct , setTypeProduct] = useState("todo")
  const [gender , setGender] = useState("todo")
  const [size , setSize] = useState()
  const [price , setPrice] = useState()

  dataApi().then(prod => setData(prod))

  return (
    <section className="oferts">
      <Nav cart={cart} setCart={setCart}></Nav>
      <div className="oferts-filters">
         <FiltersOferts setPrice={setPrice} setSize={setSize} setTypeProduct={setTypeProduct} setGender={setGender}></FiltersOferts>
      </div>
      <div className="oferts-container">
      {data.filter((prod) =>  gender === "todo" ? prod : prod.genero === gender).filter((prod) =>  typePorduct === "todo" ? prod : prod.tipo === typePorduct).filter((prod) => prod.oferta === true ).sort((a , b) => price === "mayor" ? b.precio - a.precio : a.precio - b.precio).map((prod) => {
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
