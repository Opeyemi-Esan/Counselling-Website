import React from 'react'
import '../Styles/Services.css'
import { CiCalendarDate } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa";
import { CiSquareQuestion } from "react-icons/ci";
import { GoChecklist } from "react-icons/go";

function Services() {
  return (
    <div className='flex flex-col justify-center items-center gap-10 py-[80px] '>
        <div className='flex flex-col gap-2'>
           <p className='text-[#589167] font-extrabold text-[12px] text-center'>SERVICES</p> 
           <h1 className='text-[40px] font-semibold text-center text-[#4e4e4e]'>How It Works</h1>
        </div>
      
        <div className='services flex flex-row items-center justify-center gap-10'>
            <div className='icontext cursor-pointer w-[25%] flex flex-col justify-center items-center'>
                <div className='icon w-[170px] h-[170px] bg-gray-100 flex items-center justify-center relative rounded-full'>
                    <CiCalendarDate className='calender text-[70px]' />
                    <div className='light-ball w-[40px] h-[40px] bg-[#589167] rounded-full absolute hover:bg-[#ffffff]'></div>
                    <p className='bg-[#589167] h-[50px] w-[50px] rounded-full text-white text-[18px] font-bold flex justify-center items-center absolute top-[5px] right-[2px] border-white border-4'>01</p>
                </div>

                <div>
                    <h1 className='text-[22px] font-bold text-[#5f5f5f] text-center'>Make Schedule</h1>
                    <p className='text-[18px] text-[#5f5f5f] text-center'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
            </div>

            <div className='icontext cursor-pointer w-[25%] flex flex-col justify-center items-center'>
                <div className='icon w-[170px] h-[170px] bg-gray-100 flex items-center justify-center relative rounded-full'>
                    <CiSquareQuestion className='calender text-[70px]' />
                    <div className='light-ball w-[40px] h-[40px] bg-[#589167] rounded-full absolute hover:bg-[#ffffff]'></div>
                    <p className='bg-[#589167] h-[50px] w-[50px] rounded-full text-white text-[18px] font-bold flex justify-center items-center absolute top-[5px] right-[2px] border-white border-4'>02</p>
                </div>

                <div>
                    <h1 className='text-[22px] font-bold text-[#5f5f5f] text-center'>Start Discussion</h1>
                    <p className='text-[18px] text-[#5f5f5f] text-center'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
            </div>

            <div className='icontext cursor-pointer w-[25%] flex flex-col justify-center items-center'>
                <div className='icon w-[170px] h-[170px] bg-gray-100 flex items-center justify-center relative rounded-full'>
                    <GoChecklist className='calender text-[70px]' />
                    <div className='light-ball w-[40px] h-[40px] bg-[#589167] rounded-full absolute hover:bg-[#ffffff]'></div>
                    <p className='bg-[#589167] h-[50px] w-[50px] rounded-full text-white text-[18px] font-bold flex justify-center items-center absolute top-[5px] right-[2px] border-white border-4'>03</p>
                </div>

                <div>
                    <h1 className='text-[22px] font-bold text-[#5f5f5f] text-center'>Enjoy Plan</h1>
                    <p className='text-[18px] text-[#5f5f5f] text-center'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
            </div>
        </div>

      
    </div>
  )
}

export default Services
