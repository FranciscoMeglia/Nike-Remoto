import React from 'react'
import './Footer.css'
import preciosJustos from '../../assets/db22a4c4-96cd-48d2-ba08-5ee9052133e6___2bdd91f33fc0a69a75e084e39192e8ea.webp'
import sid from '../../assets/Renaper-logo___2cfbcdca6b0b070808af1c579ff76dd9.webp'

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-card">
                    <h3>BUSCAR TIENDA</h3>
                </div>
                <div className="footer-card">
                    <h3>AYUDA</h3>
                    <ul>
                        <li><a href="#">Envios y entregas</a></li>
                        <li><a href="#">Devoluciones</a></li>
                        <li><a href="#">Cambios</a></li>
                        <li><a href="#">Autogestionar mi devolucion</a></li>
                        <li><a href="#">Opciones de pago</a></li>
                        <li><a href="#">Contacto</a></li>
                        <li><a href="#">Boton de Arrepentimiento</a></li>
                        <li><a href="#">Ver todos</a></li>
                    </ul>
                </div>
                <div className="footer-card">
                    <h3>ACERCA DE NIKE</h3>
                    <ul>
                        <li><a href="#">Noticias</a></li>
                        <li><a href="#">Inversionistas</a></li>
                        <li><a href="#">Sustentabilidad</a></li>
                    </ul>
                </div>
                <div className="footer-card">
                    <img src={preciosJustos} alt="precios justos logo" />
                    <img src={sid} alt="sid logo" />
                </div>
                <div className="footer-card">
                    <i className="fa-brands fa-square-twitter"></i>
                    <i class="fa-brands fa-square-facebook"></i>
                    <i class="fa-brands fa-square-youtube"></i>
                    <i className="fa-brands fa-square-instagram"></i>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="copyright-1">
                    <div>
                        <p>Argentina</p>
                    </div>
                    <p>© 2023 Creada con fines educativos por <a href="#">@Francisco Meglia</a> y <a href="#">@Facundo Oviedo</a></p>
                </div>
                <div className="copyright-2">
                    <a href="#">Términos y Condiciones</a>
                    <a href="#">Política de privacidad y cookies</a>
                </div>
            </div>
        </footer>
    )
}
