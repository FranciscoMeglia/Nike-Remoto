import React from 'react'
import './Footer.css'
import preciosJustos from '../../assets/Precios-Justos.webp'
import sid from '../../assets/Renaper-Logo.webp'

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
                    <a href="https://twitter.com/Nike?" target='blank'><i className="fa-brands fa-square-twitter"></i></a>
                    <a href="https://www.facebook.com/nike/?locale=es_LA" target='blank'><i className="fa-brands fa-square-facebook"></i></a>
                    <a href="https://www.youtube.com/@nike" target='blank'><i className="fa-brands fa-square-youtube"></i></a>
                    <a href="https://www.instagram.com/nike/" target='blank'><i className="fa-brands fa-square-instagram"></i></a>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="copyright-1">
                    <div>
                        <p>Argentina</p>
                    </div>
                    <p>© 2023 Creada con fines educativos por <a href="https://www.linkedin.com/in/franciscomeglia/" target='blank'>@Francisco Meglia</a> y <a href="https://github.com/Facundo337" target='blank'>@Facundo Oviedo</a></p>
                </div>
                <div className="copyright-2">
                    <a href="#">Términos y Condiciones</a>
                    <a href="#">Política de privacidad y cookies</a>
                </div>
            </div>
        </footer>
    )
}
