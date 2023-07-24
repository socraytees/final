import React from 'react'
import {FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:flex text-gray-300'>
        <div>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>MWDS</h1>
            <p className='py-4 '>No esperes y sumate al mundo digital! El proximo paso para tu emprendimiento esta a un solo mensaje. Mandalo ahora!</p>
            <div className='flex justify-between md:w-[75%] my-6 '>
                 <a href=''><FaFacebookSquare size={30} /></a>
                 <a href='https://instagram.com/comparable' target='_blank'><FaInstagram size={30} /></a>
                 <a href='https://twitter.com/' target='_blank'><FaTwitterSquare size={30} /></a>
            </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6'>
           
        </div>
    </div>
  )
}

export default Footer