import React from 'react'
import './CarrouselOferts.css'


export const CarrouselOferts = () => {
    return (
    <div id="carouselExample" class="carousel slide carousel-ofertas">
    <div class="carousel-inner">
      <div class="carousel-item active">
      <p>Oferta 50% los miercoles</p>
      <h5> En buzos y remeras</h5>
      </div>
      <div class="carousel-item">
      <p>Descuentos en prendas seleccionadas</p>
      <h5> Todos los días</h5>
      </div>
      <div class="carousel-item">
        <p>Envios a todo el país</p>
        <h5> Sin costo en compras mayores a $5000</h5>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
      
    )
  }
  