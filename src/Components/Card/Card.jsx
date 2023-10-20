import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

export const Card = ({img , titulo , subtitulo , precioOferta , precio}) => {

  return (
    <Link to={`/producto/${titulo}`}>
    <div className="card">
        <div className="card-img" style={{backgroundImage: `url(${img})`}}></div>
        <h3>{titulo}</h3>
        <p>{subtitulo}</p>
        <div className='card-prices'>
          <p>{precioOferta}</p>
          <p>{precio}</p>
        </div>
    </div>
    </Link>
  )
}
