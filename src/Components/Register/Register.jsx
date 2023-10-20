import React, { useState } from 'react'
import './Register.css'

export const Register = () => {
    const [show, setShow] = useState(false)

    return (
        <div className='register'>
            <div className='register-info'>
                <h2>SUMATE A LA COMUNIDAD</h2>
                <p>Recibí antes que nadie las últimas novedades de Nike.</p>
                <button className='btn-reg' onClick={() => {setShow(true)}}>Registrate</button>
            </div>
            {show ?
                <div className="register-form">

                </div>
                : ""}
        </div>
    )
}

