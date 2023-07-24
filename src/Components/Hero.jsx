import React from 'react'
import Typed from 'react-typed'

const Hero = () => {
  return (
    <div id='#Home' className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold p-2'>Compra tu sitio web hoy!</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md: py-6'>Crece con el Internet</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Sitio web's para</p>
                <Typed 
                className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
                strings={['Empresas', 'Emprendimientos', 'Servicios']}
                typeSpeed={120}
                backSpeed={100}
                loop />
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500 mt-1'>Usa el internet como una herramienta para tu negocio.</p>
            <button type='submit'action="mailto: 2004ssnicoo@gmail.com" className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black '>
              <a 
              href = "mailto:2004ssnicoo@gmail.com@" target='_blank'>Consultar por producto</a></button> 
        </div>
    </div>
  )
}

export default Hero