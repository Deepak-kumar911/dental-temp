import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { SlSocialFacebook } from "react-icons/sl";
import { CiHome, CiLinkedin } from "react-icons/ci";
import { AiOutlinePinterest } from "react-icons/ai";
import Link from 'next/link';
import { MdOutlineMailOutline } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { CiLocationOn } from "react-icons/ci";

function Footer() {
  return (
   <>
   

<footer className="bg-gray-900 text-white">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <Link href="/" className="flex items-center">
                  <img src="/img/img11.png" className="h-12 me-3" alt="FlowBite Logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">DentalCare</span>
              </Link>
                <p className='text-xl mt-2'> Your Trusted Partner for Quality <br/> Dental Care</p>
                <div className='flex gap-1 mt-5'>
          <div href={"https://in.linkedin.com/company/oxinno?trk=public_post_follow-view-profile"} target='_blank' className='bg-white shadow-white  shadow-md font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2'>
            <CiLinkedin className='text-blue-700 text-xl'/>
            </div>
          <Link href={"https://www.instagram.com/info.oxinno/"} target='_blank' className='bg-white  shadow-white  shadow-md font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2'>
            <FaInstagram className='text-pink-700 text-xl'/>
            </Link>
            <Link href={"https://www.facebook.com/people/Oxinno/61556203701466/"} target='_blank' className='bg-white  shadow-white  shadow-md font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2'>
            <SlSocialFacebook className='text-blue-700 text-xl'/>
            </Link>
            <Link  href={"https://in.pinterest.com/info_oxinno/"} target='_blank' className='bg-white  shadow-white  shadow-md font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2'>
            <AiOutlinePinterest  className='text-red-800 text-xl'/>
            </Link>

          </div>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-3">
         
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Support</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4 flex gap-2 items-center">
                      <CiLocationOn  className="text-blue-600 text-xl"/>  <p>USA</p>
                      </li>
                      <li className="mb-4 flex gap-2 items-center">
                      <FaPhoneAlt  className="text-blue-600 text-xl"/> <p>+880 1457-9999</p>
                      </li>
                      <li className="mb-4 flex gap-2 items-center">
                      <MdOutlineMailOutline  className="text-blue-600 text-xl"/> <p>support@dentalcare.com</p>
                      </li>
                  </ul>
              </div>
              <div></div>
                          <div>
                              <h2 className="mb-2 text-sm font-semibold text-white uppercase dark:text-white">Working Hours</h2>
                              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                  <li className="my-4">Monday: 8am – 7pm </li>
                                  <li className="my-4">Tuesday: 8am – 5pm </li>
                                  <li className="my-4">Wednesday: 8am – 5pm </li>
                                  <li className="my-4">Thursday: 8am – 7pm </li>
                                  <li className="my-4">Friday: 8am – 5pm </li>


                              </ul>
                          </div>

          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="text-center">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="/" className="hover:underline">DentalCare™</a>. All Rights Reserved.
          </span>
      </div>
    </div>
</footer>

   </>
  )
}

export default Footer