import "../assets/styles/produtos.css"
import setaDireita from '../assets/imgs/Vector.png'
import setaEsquerda from '../assets/imgs/VectorEsquerda.png'
import { useEffect, useState } from 'react'
import "../assets/styles/modal.css"
import Modal from 'react-modal'
import axios from 'axios'

function Produtos() {

    const [index, setIndex] = useState(4)
    const [comecar, setComecar] = useState(0)
    const [dados, setDados] = useState([]);
    const [carregando, setCarregando] = useState(true)
    const [modal, setModal] = useState(false);
    const [i, setI] = useState(0)
    const [valor, setValor] = useState(1)

    const desativarModal = () => {
        setModal(false)
    }

    const aumentarValor = () => {
        setValor(valor + 1)
    }

    const diminuirValor = () => {
        if (valor <= 0) {
            console.log(valor)
            setValor(1)
        }
        setValor(valor - 1)
    }

    const aumentar = () => {
        if (index === 9) {
            setIndex(index)
        } else {
            setIndex(index + 1)
            setComecar(comecar + 1)
        }

    }

    const diminuir = () => {
        if (comecar === 0) {
            setComecar(comecar)
        } else {
            setIndex(index - 1)
            setComecar(comecar - 1)
        }
    }

    async function api() {
        await axios.get('https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json')
            .then(response => {
                setDados(response.data.products);
            })
            .catch(error => {
                console.log(error);
            });
        setCarregando(false)
    }

    useEffect(() => {
        api()
    }, []);


    return (
        <>
            {carregando && <h1></h1>}
            {!carregando &&
                <>
                    {/* <div className='container__tipos'>
                        <div className='titulo__container'>
                            <hr className='hrs' />
                            <h2 className='text__prod'>Produtos Relacionados</h2>
                            <hr className='hrs' />
                        </div>
                        <div className='prod__relacionados'>
                            <p className='text__relacionados'>celular</p>
                            <p className='text__relacionados'>acessorios</p>
                            <p className='text__relacionados'>tablets</p>
                            <p className='text__relacionados'>notbooks</p>
                            <p className='text__relacionados'>TVs</p>
                            <p className='text__relacionados'>Ver todos</p>
                        </div>
                    </div> */}
                    <div className='container__produtos'>
                        <button className='button__setaE' onClick={aumentar}>
                            <img src={setaEsquerda} alt='setaEsquerda' width={20} height={20} />
                        </button>
                        {dados.slice(comecar, index).map((item, i) => {
                            return (
                                <ul className='uls__produtos'>
                                    <div key={item} className='div__key'>
                                        <li className='li__produtos'>
                                            <div className='box__produtos'>
                                                <img className="img__box" src={item.photo} alt="produto" />
                                                <p className='produto__nome'>{item.productName}</p>
                                                <p className='produto__preco'>R$ 15010,00</p>
                                                <h2 className='produto__off'>R$ {item.price}</h2>
                                                <p className='produto__parcelas'>ou 2x de R$ 7510,00 sem juros</p>
                                                <p className='produto__frete'>Frete gratis</p>
                                            </div>
                                            <button className='button__box' onClick={(event) => {
                                                setModal(true)
                                                setI(i)
                                            }}>Comprar</button>
                                        </li>
                                    </div>
                                </ul>
                            )
                        })}
                        <button className='button__setaD' onClick={diminuir}>
                            <img src={setaDireita} alt='setaDireita' width={20} height={20} />
                        </button>
                    </div>
                    <Modal isOpen={modal} className="modal">
                        <button className='button__close' onClick={desativarModal}>
                            <p>X</p>
                        </button>
                        <div className='container__modal'>
                            <img src={dados[i].photo} className='img__modal' alt='Produto' />
                            <div className='box__modal'>
                                <h1 className='nome__modal'>{dados[i].productName}</h1>
                                <h3 className='preco__modal'> R$ {dados[i].price}</h3>
                                <p className='text__modal'>Many desktop publishing packages and web page editors now many desktop publishing</p>
                                <p className='text__modal'>Veja mais detalhes do produto </p>
                                <div className='quant__modal'>
                                    <button className='up__modal' onClick={aumentarValor}>
                                        <p className='quant__valueUP'>+</p>
                                    </button>
                                    <p className='quant__value'>{valor}</p>
                                    <button className='down__modal' onClick={diminuirValor}>
                                        <p className='quant__valueDOWN'>-</p>
                                    </button>
                                </div>
                                <button className='buttoon__modal' >Comprar</button>
                            </div>
                        </div>
                    </Modal>
                </>
            }
        </>
    )
}

export default Produtos