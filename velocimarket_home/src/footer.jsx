import './footer.css'
import logo from './assets/logo-chiquito.svg'
import instagram from './assets/instagram.svg'
import twitter from './assets/twitter.svg'
import facebook from './assets/facebook.svg'
import telegram from './assets/telegram.svg'
import lupa from './assets/Lupa.svg'

export function Footervel({ }) {
    return (
        <footer className="footer">
            <img className="footer-logo" src={logo} />
            <div className="contenido-footer">
                <div className="header-footer">
                    <div className="footer-links">
                        <div>
                            <a >Acerca de</a>
                            <a >Características</a>
                            <a >Precios</a>
                            <a >Galería</a>
                            <a >Equipo</a>
                        </div>
                        <div className="redes-sociales">
                            <div className='buscador-footer'>
                            <input type="text" placeholder="Search..." className="buscador"></input>
                            <img className="footer-icon-lupa" src={lupa} />
                            </div>
                            <img className="footer-icon" src={instagram} />
                            <img className="footer-icon" src={twitter} />
                            <img className="footer-icon" src={facebook} />
                            <img className="footer-icon" src={telegram} />
                        </div>
                    </div>
                    <div className="line-hor"></div>
                    <div className="footer-links">
                        <div>
                            <a >Aviso legal</a>
                            <a >Política de privacidad</a>
                            <a >Términos y condiciones</a>
                            <a >Ventas y reembolsos</a>
                            <a >Legal</a>
                            <a >Mapa del sitio</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}