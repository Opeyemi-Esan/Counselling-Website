import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaInstalod } from "react-icons/fa6";

function Info() {
  return (
    <div className='flex flex-row justify-between items-center py-2 px-[100px] bg-[#589167] text-white'>
        <div className='left-side flex flex-row gap-5 items-center'>
           <div className='left-side flex flex-row gap-1 items-center hover:cursor-pointer'>
                <FaPhoneAlt className='text-[14px]' />
                <p>+100 1234 567</p>
            </div>
            <div className='left-side flex flex-row gap-1 items-center hover:cursor-pointer'>
                <IoIosSend className='text-[14px]' />
                <p>youremail@email.com</p>
            </div> 
        </div>

        <div className='right left-side flex flex-row gap-5 items-center'>
            <FaFacebookF className='hover:cursor-pointer' />
            <FaXTwitter className='hover:cursor-pointer' />
            <FaInstagram className='hover:cursor-pointer' />
            <FaInstalod className='hover:cursor-pointer' />
        </div>
      
    </div>
  )
}

export default Info
