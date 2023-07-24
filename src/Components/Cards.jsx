import React from 'react'
import htmllogo from '../Assets/html5-logo.png'
import javascriptlogo from '../Assets/javascript-logo.png'
import reactlogo from '../Assets/react-logo.png'

const Cards = () => {
  return (
    <div id='#products' className='w-full py-[10rem] px-4 bg-[#64748b]'>
        <div className='max-w[120px] mx-auto grid md:grid-cols-3 gap-8 '>
            <div className=' bg-gray-200 w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 '>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={htmllogo} alt='/' />
                <h2 className='text-2xl font-bold text-center py-8 '>Paquete 1</h2>
                <p className='text-center text-4xl font-bold '>$7.000</p>
                <div className='text-center font-medium'> 
                    <p className='py-2 border-b border-black mx-8 mt-8'>Un sitio informativo para presentarse a los clientes</p>
                    <p className='py-2 border-b border-black mx-8'>1 sola pagina</p>
                    <p className='py-2 border-b border-black mx-8'>La mejor opcion para emprendimientos locales y servicios pequenos.</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Comprar Ahora</button>
            </div>
            
            <div className='w-full shadow-xl bg-gray-200 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300 '>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={javascriptlogo} alt='/' />
                <h2 className='text-2xl font-bold text-center py-8 '>Paquete 2</h2>
                <p className='text-center text-4xl font-bold '>$20.000</p>
                <div className='text-center font-medium'> 
                    <p className='py-2 border-b border-black mx-8 mt-8'>Un sitio con una interfaz de usuario interactiva, animaciones etc</p>
                    <p className='py-2 border-b border-black mx-8'>3 Paginas</p>
                    <p className='py-2 border-b border-black mx-8'>Mejor opcion para emprendimientos y servicios provinciales</p>
                </div>
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Comprar Ahora</button>
            </div>
            
            <div className='bg-gray-200 w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 '>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={reactlogo} alt='/' />
                <h2 className='text-2xl font-bold text-center py-8 '>Paquete 3</h2>
                <p className='text-center text-4xl font-bold '>$70.000</p>
                <div className='text-center font-medium'> 
                    <p className='py-2 border-b border-black mx-8 mt-8'>Sitio web con front y back end completo</p>
                    <p className='py-2 border-b border-black mx-8'>5-6 paginas con un sistema de pago integrado para clientes</p>
                    <p className='py-2 border-b border-black mx-8'>Mejor opcion para pymes, empresas nacionales y provinciales.</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Comprar Ahora</button>
            </div>
        </div>
        <p className='text-white text-md mx-auto w-full flex text-center justify-center mt-6'>Todo los precios publicados estan en pesos argentinos</p>
    </div>
  )
}

export default Cards