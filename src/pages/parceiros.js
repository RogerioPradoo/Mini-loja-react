import "../assets/styles/parceiros.css"
import produtos from '../assets/imgs/image 45.png'

function Parceiros() {
    return (
        <><div className='container__parceiros'>
            <div className='parceiros__box'>
                <img src={produtos} className='img__parceiros' alt="produtos" />
                <div className='text__box'>
                    <h2 className='titulo__parceiros'>Parceiros</h2>
                    <p className='text__parceiros'>Lorem ipsum dolor sit amet, consctetur</p>
                    <button className='button__parceiros'>Confira</button>
                </div>
            </div>
            <div className='parceiros__box'>
                <img src={produtos} className='img__parceiros' alt="produtos" />
                <div className='text__box'>
                    <h2 className='titulo__parceiros'>Parceiros</h2>
                    <p className='text__parceiros'>Lorem ipsum dolor sit amet, consctetur</p>
                    <button className='button__parceiros'>Confira</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Parceiros