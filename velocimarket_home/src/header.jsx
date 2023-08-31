import './header.css'
import logo from './assets/logo-chiquito.svg'


export function Headervel({ }) {
    return (
        <header>
            <div className='contenedorlogo'>
            <img src={logo} alt="logotipo" className='logo'></img>
            <span className='nombrelogo'>VelociMarket</span>
            </div>
            <nav>
                <a className="nav-link">OFERTAS</a>
                <a className="nav-link">BLOG</a>
                <a className="nav-link">PRODUCTOS</a>
                <a className="nav-link">SOPORTE</a>
            </nav>
            <div>
                <button className='off'>Registrase</button>
                <button className='on'>Iniciar Sesión</button>
            </div>
        </header>
    )
}