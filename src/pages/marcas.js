import logis from '../assets/imgs/network.png'
import "../assets/styles/marcas.css"

function LogoMarca() {
    return (
        <>
            <div className='titulo__marcas'>
                <h2>Navegue por marcas</h2>
            </div>
            <div className='marcas__container'>
                <div className='box__marcas'>
                    <img src={logis} className="img__marcas" alt='logos' />
                    <p className='text__marcas'>UPSELL</p>
                </div>
                <div className='box__marcas'>
                    <img src={logis} className="img__marcas" alt='logos' />
                    <p className='text__marcas'>UPSELL</p>
                </div>
                <div className='box__marcas'>
                    <img src={logis} className="img__marcas" alt='logos' />
                    <p className='text__marcas'>UPSELL</p>
                </div>
                <div className='box__marcas'>
                    <img src={logis} className="img__marcas" alt='logos' />
                    <p className='text__marcas'>UPSELL</p>
                </div>
                <div className='box__marcas'>
                    <img src={logis} className="img__marcas" alt='logos' />
                    <p className='text__marcas'>UPSELL</p>
                </div>
            </div>
        </>
    )
}

export default LogoMarca