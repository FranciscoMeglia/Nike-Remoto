import React, { useState } from 'react'
import './Register.css'
import logoNike from '../../assets/nike-logo.png'
import closeIcon from '../../assets/close-icon.png'

export const Register = () => {
    
    const [show, setShow] = useState(false)
    const [email , setEmail] = useState("")

    return (
        <div className='register'>
            <div className='register-info'>
                <h2>SUMATE A LA COMUNIDAD</h2>
                <p>Recibí antes que nadie las últimas novedades de Nike.</p>
                <button className='btn-reg' onClick={() => { setShow(true) }}>Registrate</button>
            </div>
            {show ?
                <div className="register-form">
                    <img src={logoNike} alt="logo nike" />
                    <h2>Suscribite para recibir novedades de Nike</h2>
                    <h5>¡Ingresá tu correo y enterate antes que nadie!</h5>
                    <input type="email" name="" id="email" placeholder='Dirección de correo electrónico' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <button onClick={() => { setEmail("") }}>SUSCRIBITE</button>
                    <p>Al registrarte, aceptás los Términos y Condiciones y la Política de Privacidad y Cookies de Nike.</p>
                    <p>Tus datos serán administrados por Southbay S.R.L.</p>
                    <img src={closeIcon} alt="close icon" className='navClose' onClick={() => {setShow(false)}}/>
                </div>
                : ""}
        </div>
    )
}

