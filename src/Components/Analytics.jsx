import React from 'react'
import Network from '../Assets/network-logo.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={Network} alt="/" />
            <div className='flex flex-col justify-center '>
                <p className='text-[#00df9a] font-bold '></p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>¿Porque un sitio web?</h1>
                <p className='mx-4'>Como emprendedores, negocios, pymes etc un sitio web nos ayuda presentarse no soloamente a los alrededores pero al mundo!! Con el internet estamos todos conectados, todo los dias la tecnologia avanza y debemos utilizarla como una herramienta para seguir adelante.</p>
            </div>
        </div>
    </div>
  )
}

export default Analytics