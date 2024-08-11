import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
   <div className='flex md:flex-row flex-col  items-center justify-between mx-10 md:h-16 text-lg'>
    <Link href="/" className='flex items-center'><img src='/img/img11.png' className='h-12'/><h3 className='text-white text-2xl'>DentalCare</h3></Link>
    <div>
        <ul className='flex gap-6 text-gray-100'>
            <Link href="#home" className='text-white cursor-pointer hover:text-orange-500'>Home</Link>
            <Link href="#about" className='cursor-pointer  hover:text-orange-500'>About</Link>
            <Link href="#services" className='cursor-pointer  hover:text-orange-500'>Service</Link>
            <Link href="#contact" className='cursor-pointer  hover:text-orange-500'>Contact Us</Link>
        </ul>
    </div>
    <Link href="#appointment" className='bg-white mt-5 md:mt-0  px-5 py-2 rounded-full hover:bg-orange-400 hover:text-white shadow-sm shadow-blue-100 hover:shadow-orange-400 cursor-pointer'>Appointment</Link>
   </div>
  )
}

export default Navbar