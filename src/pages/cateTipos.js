import "../assets/styles/tipos.css"

function Tipos() {
    return (
        <div className='container__tipos'>
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
        </div>
    )
}

export default Tipos