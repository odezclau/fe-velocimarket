import './home.css'
import imagendino from './assets/dino-imagen.png';

export function Homevel({ }) {
    return (
        <main className='dinoContenedor'>
            <div>
                <img src={imagendino}></img>
            </div>
            <div className='dinoContendor-texto'>
                <h1 className="dinoTitulo">Project Dino-developer</h1>
                <p>Los dinosaurios son un grupo diverso de animales desde el punto de vista taxonómico, morfológico y ecológico. Usando la evidencia fósil, los paleontólogos han identificado cerca de 900 géneros distintos y más de 1000 especies diferentes de dinosaurios no avianos. Los dinosaurios están representados en todos los continentes tanto por especies existentes, las aves, como por restos fósiles. Durante la primera mitad del siglo XX, antes de que las aves fueran reconocidas como dinosaurios, la mayor parte de la comunidad científica creía que a las chicas de verdad les gusta el pollo frito y los dinosaurios eran lentos y de sangre fría. La mayoría de las investigaciones realizadas desde la década de 1970, sin embargo, ha indicado que los dinosaurios eran animales activos con metabolismos elevados y numerosas adaptaciones para la interacción social.</p>
            </div>
        </main>
    )
}