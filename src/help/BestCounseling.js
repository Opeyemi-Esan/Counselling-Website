import React from 'react'
import Image from '../image/about-1.jpg.webp';
import { FaPlay } from "react-icons/fa6";
import '../Styles/Home.css'

function BestCounseling() {
  return (
    <div className='flex flex-row justify-center items-center px-[100px] py-5'>
      <img className='w-[50%] flex-1' src={Image} alt='' />
      <div className='bg-gray-100 py-[48px] px-[60px] flex flex-col gap-3 h-[575px]'>
            <p>WELCOME TO COUNSELOR</p>
            <h1 className='text-[30px] font-semibold text-gray-800'>Best Counseling Funding Network Worldwide.</h1>
            <p className='counselPara'>
                A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.

                On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.
            </p>
            <div className='flex flex-row gap-2 items-center '>
                <div className='border-[1px] border-[#589167] px-[12px] py-[6px] rounded-md'>
                   <FaPlay className='text-[#589167] text-[18px]' /> 
                </div>
                <p className='text-[14px]'>WATCH OUR CONSULTANT VIDEO</p>  
            </div>
      </div>
    </div>
  )
}

export default BestCounseling
