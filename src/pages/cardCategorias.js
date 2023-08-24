import "../assets/styles/categoria.css"
import tecnologia from '../assets/imgs/monitorar-tablet-e-smartohone 1.png'
import supermercado from '../assets/imgs/supermercados 1.png'
import bebidas from '../assets/imgs/whiskey.png'
import ferramentas from '../assets/imgs/ferramentas 1.png'
import saude from '../assets/imgs/cuidados-de-saude 1.png'
import moda from '../assets/imgs/moda 1.png'
import esporte from '../assets/imgs/corrida 1.png'


function Categorias() {
    return (
        <menu className='container__menu'>
            <div className='box__menu'>
                <div className='box__img'>
                    <img src={tecnologia} alt='Tecnologia' />
                </div>
                <p>Tecnologia</p>
            </div>
            <div className='box__menu'>
                <div className='box__img'>
                    <img src={supermercado} alt='supermercado' />
                </div>
                <p>Supermercado</p>
            </div>
            <div className='box__menu'>
                <div className='box__img'>
                    <img src={bebidas} alt="bebidas" />
                </div>
                <p>Bebidas</p>
            </div>
            <div className='box__menu'>
                <div className='box__img'>
                    <img src={ferramentas} alt="ferramentas" />
                </div>
                <p>Ferramentas</p>
            </div>
            <div className='box__menu'>
                <div className='box__img'>
                    <img src={saude} alt="saude" />
                </div>
                <p>Saúde</p>
            </div>
            <div className='box__menu'>
                <div className='box__img'>
                    <img src={esporte} alt="esporte" />
                </div>
                <p>Esporte e Fitness</p>
            </div>
            <div className='box__menu'>
                <div className='box__img'>
                    <img src={moda} alt="moda" />
                </div>
                <p>Moda</p>
            </div>
        </menu>
    )
}

export default Categorias