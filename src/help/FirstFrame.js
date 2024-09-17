import React from 'react';
import '../Styles/Home.css';
import { FaPlay } from "react-icons/fa6";
import BackImage from '../image/bg_1.jpg.webp';
import { Parallax } from 'react-parallax';

function FirstFrame() {
  return (
    <Parallax className='background' bgImage={BackImage} bgImageAlt='' strength={300}>
        <div className='content flex flex-row justify-between px-[100px]'>
            <div className='left max-w-[60%] pt-[20%] flex flex-col gap-5'>
                <h1 className='text-[55px] font-semibold'>Counseling For Your Better Life</h1>
                <p className='max-w-[80%] text-[18px]'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                <div className='button flex flex-row gap-1'>
                    <button className='bt1 bg-[#589167] py-4 px-4 rounded-[5px] text-white'>Contact Us</button>
                    <button className='bt2 bg-[#ffffff] py-4 px-4 rounded-[5px] text-black'>Read More</button>
                </div>
            </div>
            <div className='pt-[30%]'>
                <div className='play p-8 rounded-full bg-white text-[22px] text-[#589167]'>
                    <FaPlay />
                </div>  
            </div>  
        </div>
    </Parallax>
        
  )
}

export default FirstFrame
