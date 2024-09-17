import React from 'react'
import { Parallax } from 'react-parallax';
import { GoChecklist } from "react-icons/go";
import { BsUmbrella } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";

function ThingsAbout() {
  return (
    <Parallax className='mt-[-70px]' strength={300}>
        <div className='flex flex-row'>
            <div className='lg:max-w-[40%] bg-[#589167] flex justify-end items-center px-5'>
                <div className='confidential lg:max-w-[80%] bg-[#589167] px-5 py-3 text-white text-[18px] flex flex-row items-center justify-end gap-5'>
                <GoChecklist className='text-[150px]' />
                <div className='flex flex-col gap-3'>
                    <h1 className='text-[25px] font-semibold'>100% Confidential</h1>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
            </div>
            </div>
           
        
            <div className='lg:max-w-[25%] bg-[#478156] px-5 py-3 text-white text-[18px] flex flex-row items-center justify-center gap-5'>
                <IoIosPeople className='text-[150px]' />
                <div className='flex flex-col gap-3'>
                    <h1 className='text-[25px] font-semibold'>Qualified Team</h1>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
            </div>

            <div className='lg:max-w-[25%] bg-[#386b45] px-5 py-3 text-white text-[18px] flex flex-row items-center justify-center gap-5'>
                <BsUmbrella className='text-[150px]' />
                <div className='flex flex-col gap-3'>
                    <h1 className='text-[25px] font-semibold'>Individual Approach</h1>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
            </div> 
        </div>
        
    </Parallax>
  )
}

export default ThingsAbout
