import visa from '../assets/imgs/Group 1351visa.png'
import amex from '../assets/imgs/amex.png'
import ticket from '../assets/imgs/ticket.png'
import dinners from '../assets/imgs/dinners.png'
import elo from '../assets/imgs/elo.png'
import ifood from '../assets/imgs/ifood.png'
import face from '../assets/imgs/023-facebook.png'
import insta from '../assets/imgs/044-instagram.png'
import yout from '../assets/imgs/116-youtube.png'
import master from '../assets/imgs/mastercard.png'
import pix from '../assets/imgs/pix.png'
import sodexo from '../assets/imgs/sodexo.png'
import alelo from '../assets/imgs/alelo.png'
import logoEco from '../assets/imgs/Grupo 1999logoEco.png'
import vtex from '../assets/imgs/Group 35LogoVtex.png'

import "../assets/styles/footer.css"


function Footer() {
    return (
        <footer className='footer'>
            <div className='container__footer'>
                <div className='box__sobre'>
                    <h2 className='titulo__footer'>Sobre nós</h2>
                    <div className='text__footer'>
                        <p className='text__sobre'>Conheça</p>
                        <p className='text__sobre'>Como comprar</p>
                        <p className='text__sobre'>Indicação e desconto</p>
                    </div>
                    <div className='box__icons'>
                        <img src={face} alt='face' />
                        <img src={insta} alt='insta' />
                        <img src={yout} alt='youtube' />
                    </div>
                </div>
                <div className='box__sobre'>
                    <h2 className='titulo__footer'>informações úteis</h2>
                    <div>
                        <p className='text__sobre'>fale conosco</p>
                        <p className='text__sobre'>dúvidas</p>
                        <p className='text__sobre'>prazos de entrega</p>
                        <p className='text__sobre'>formas de pagamentos</p>
                        <p className='text__sobre'>política de privacidade</p>
                        <p className='text__sobre'>troca e devoluções</p>
                    </div>
                </div>
                <div className='box__pagamentos'>
                    <h2 className='titulo__footer'>formas de pagamentos</h2>
                    <div className='box__pags'>
                        <img className='icon__footer' src={visa} alt='visa' />
                        <img className='icon__footer' src={elo} alt='elo' />
                        <img className='icon__footer' src={alelo} alt='alelo' />
                        <img className='icon__footer' src={dinners} alt='dinners' />
                        <img className='icon__footer' src={ifood} alt='ifood' />
                        <img className='icon__footer' src={master} alt='master' />
                        <img className='icon__footer' src={pix} alt='pix' />
                        <img className='icon__footer' src={amex} alt='amex' />
                        <img className='icon__footer' src={ticket} alt='ticket' />
                        <img className='icon__footer' src={sodexo} alt='sodexo' />
                    </div>
                </div>
                <div className='cadastro__footer'>
                    <div className='cadastro__box'>
                        <h2 className="titulo__one">cadastre-se e receba nossas</h2>
                        <h2 className='titulo__two'>novidades e promoções</h2>
                        <p className='desc__footer'>Exceptur sint accaecat cudatat non ent, sunt in culpa qui officia lorem ipsum</p>
                        <div className='box__input'>
                            <input className='input__footer' placeholder='SEU EMAIL'></input>
                            <button className='button__footer'>Ok</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer__end'>
                <p className='copy__footer'>Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos. É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.</p>
                <img src={logoEco} width={50} height={50} alt='econverse' />
                <img src={vtex} width={50} height={50} alt='vtex' />
            </div>
        </footer>
    )
}

export default Footer