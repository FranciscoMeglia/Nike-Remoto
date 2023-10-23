import './Home.css'
import React, { useState } from 'react'
import { Nav } from '../../Components/Navbar/Nav'
import { Card } from '../../Components/Card/Card'
import { Footer } from '../../Components/Footer/Footer'
import { Register } from '../../Components/Register/Register'
import { Link } from 'react-router-dom'

export const Home = ({ dataApi, cart, setCart }) => {

  const [data, setData] = useState([])

  dataApi().then(prod => setData(prod))

  return (
    <div className="home">
      <Nav cart={cart} setCart={setCart}></Nav>
      <div className="container-banner">
        <div className="banner">
        </div>
      </div>
      <section className="info">
        <div className="title">
          <h2>POTENCIA TU ENTRENAMIENTO</h2>
          <p>ESTE DIA DE LA MADRE REGALA LO MEJOR , REGALA NIKE</p>
          <Link to={"/Mujer"}>COMPRAR</Link>
        </div>
      </section>
      <section className="potence">
        <div className="img"></div>
        <div className="title">
          <h2>LA MEJOR ELECCION</h2>
          <p>AIR FORCE 1 LOW RETRO</p>
          <Link to={"/producto/13/Nike%20Air%20Force%201%20Low%20Retro"}>COMPRAR</Link>
        </div>
        <hr />
        <div className="oferts-title">
          <p>OFERTAS</p>
        </div>
        <div className="carrousel">
          <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="contenedor">
                  {data.filter((prod) => prod.oferta)
                  .slice(0, 3)
                  .map((prod) => {
                    const newPrice = prod.precio * (100 - prod.porcentageOferta) / 100;
                    return <Card img={prod.img} titulo={prod.nombre} subtitulo={prod.descripcion} precioOferta={`$ ${Math.round(newPrice)}`} precio={`$ ${prod.precio}`} id={prod.id} key={prod.id}></Card>
                  })}
                </div>
              </div>
              <div className="carousel-item">
                <div className='contenedor'>
                  {data.filter((prod) => prod.oferta)
                  .slice(3, 6)
                  .map((prod) => {
                    const newPrice = prod.precio * (100 - prod.porcentageOferta) / 100;
                    return <Card img={prod.img} titulo={prod.nombre} subtitulo={prod.descripcion} precioOferta={`$ ${Math.round(newPrice)}`} precio={`$ ${prod.precio}`} id={prod.id} key={prod.id}></Card>
                  })}
                </div>
              </div>
              <div className="carousel-item">
                <div className="contenedor">
                  {data.filter((prod) => prod.oferta)
                  .slice(6, 9)
                  .map((prod) => {
                    const newPrice = prod.precio * (100 - prod.porcentageOferta) / 100;
                    return <Card img={prod.img} titulo={prod.nombre} subtitulo={prod.descripcion} precioOferta={`$ ${Math.round(newPrice)}`} precio={`$ ${prod.precio}`} id={prod.id} key={prod.id}></Card>
                  })}
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" style={{ width: "32px" }}>
              <span className="carousel-control-prev-icon" aria-hidden="true" style={{ backgroundColor: "black", borderRadius: "100%" }}></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" style={{ width: "32px" }}>
              <span className="carousel-control-next-icon" aria-hidden="true" style={{ backgroundColor: "black", borderRadius: "100%" }}></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
      <hr />
      <section className='gender'>
        <div className="gender-container">
          <div className="men-1">
            <div className="men"></div>
            <Link to={"/Hombre"}>Hombre</Link>
          </div>
          <div className="women-1">
            <div className="women"></div>
            <Link to={"/Mujer"}>Mujer</Link>
          </div>
        </div>
      </section>
      <Register></Register>
      <Footer></Footer>
    </div>
  )
}
