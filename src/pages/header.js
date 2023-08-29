import truck from '../assets/imgs/truck.png'
import shield from '../assets/imgs/ShieldCheck.png'
import cartao from '../assets/imgs/CreditCard.png'
import crow from '../assets/imgs/CrownSimple.png'
import caixa from '../assets/imgs/GroupCaixa.png'
import favorito from '../assets/imgs/Heart.png'
import user from '../assets/imgs/UserCircle.png'
import glass from '../assets/imgs/MagnifyingGlass.png'
import carrinho from '../assets/imgs/ShoppingCart.png'
import logis from '../assets/imgs/network.png'
import banner from '../assets/imgs/Rectangle 250.png'
import '../assets/styles/header.css'

function Header() {

    return (
        <>
            <div className='container'>
                <div className="Header">
                    <header className="App-header">
                        <div className='header-top'>
                            <div className="mini__heeader">
                                <img src={shield} className="mini-icon" alt='icons' />
                                <p className='text__mini'>Compra <p className='text__pink'>100% segura</p></p>
                            </div>
                            <div className="mini__heeader">
                                <img src={truck} className="mini-icon" alt='icons' />
                                <p className='text__mini'>Frete grátis <p className='text__pink'>acima de R$ 200</p></p>
                            </div>
                            <div className="mini__heeader">
                                <img src={cartao} className="mini-icon" alt='icons' />
                                <p className='text__mini'>Parcele <p className='text__pink'>suas compras</p></p>
                            </div>
                        </div>
                        <hr className='hr__header' />
                        <div className="campo__input">
                            <div className='campo__logo'>
                                <img src={logis} className="header__logo" alt="logo" />
                                <p className='text__logo'>UPSELL</p>
                            </div>
                            <div className='cont__input'>
                                <input placeholder='O que está buscando?' className='input__campo'></input>
                                <img src={glass} className="icon-logo" alt="logo" />
                            </div>
                            <div className='icons__input'>
                                <img src={caixa} className="icon-logo" alt="logo" />
                                <img src={favorito} className="icon-logo" alt="logo" />
                                <img src={user} className="icon-logo" alt="logo" />
                                <img src={carrinho} className="icon-logo" alt="logo" />
                            </div>
                        </div>
                        <hr className='hr__header' />
                        <div className='header__text'>
                            <p className='text__header'>todas categorias</p>
                            <p className='text__header'>supermecado</p>
                            <p className='text__header'>livros</p>
                            <p className='text__header'>lançamentos</p>
                            <p className='text__pink'>ofertas do dia</p>
                            <div className='text__crow'>
                                <img src={crow} alt="Crow" />
                                <p className='text__header'>assinatura</p>
                            </div>
                        </div>
                    </header>
                </div>
                <div className='banner'>
                    <img src={banner} className='banner__img' alt="banner__img" />
                    <div className='text__banner'>
                        <h1 className='hOne__banner'>venha conhecer nossas promoções</h1>
                        <h2 className='hTwo__banner'>50% Off nos produtos</h2>
                        <button className='button__banner'>Ver produto</button>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Header;
