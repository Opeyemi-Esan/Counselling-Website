import React from 'react';
import '../Styles/Navbar.css'
import { NavLink } from 'react-router-dom';
import { Parallax } from 'react-parallax';

function Navbar() {
  
  

  return (
    <Parallax className='nav-cont' strength={300}>
      <div className='nav flex flex-row bg-white justify-between items-center text-black py-[20px] px-[100px]'>
        <div className='logo text-[20px] font-semibold cursor-pointer'>
          <h1>Couselor</h1>
        </div>

        <div className='right-side text-[15px] font-semibold flex flex-row gap-10 items-center justify-center'>
          <NavLink className={({ isActive }) => (isActive ? 'normal active-link' : 'normal') } to={'/'}>Home</NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'normal active-link' : 'normal') } to={'/about'}>About</NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'normal active-link' : 'normal') } to={'/counselo'}>Couselor</NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'normal active-link' : 'normal') } to={'/services'}>Services</NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'normal active-link' : 'normal') } to={'/pricing'}>Pricing</NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'normal active-link' : 'normal') } to={'/blog'}>Blog</NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'normal active-link' : 'normal') } to={'/contact'}>Contact</NavLink>
        </div>
      </div>
    </Parallax>
    
  )
}

export default Navbar
