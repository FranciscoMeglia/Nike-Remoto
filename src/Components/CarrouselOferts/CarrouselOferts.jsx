import React from 'react'
import './CarrouselOferts.css'

export const CarrouselOferts = () => {
  return (
    <div id="carouselExample" className="carousel slide carousel-oferts">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <p>Oferta 50% los miercoles</p>
          <h5> En buzos y remeras</h5>
        </div>
        <div className="carousel-item">
          <p>Descuentos en prendas seleccionadas</p>
          <h5> Todos los días</h5>
        </div>
        <div className="carousel-item">
          <p>Envios a todo el país</p>
          <h5> Sin costo en compras mayores a $50.000</h5>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

  )
}
