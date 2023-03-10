import React from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';

function Nav() {
    const [menu, setMenu] =useState(false)

    const handleClick = (e) => {
        setMenu(!menu);
       
        setTimeout(()=>{
            setMenu(menu);
            }, 3000)
    }
  return (
    <>
      <nav className='w-full h-full bg-inherit flex items-center justify-center'>
       <button type='button' onClick={handleClick} className='w-10 h-10 md:hidden'>{!menu ? <FaBars /> : <FaTimes />}</button>
      </nav>
      <div className={!menu ? 'hidden' :'bg-transparent w-full flex flex-col fixed z-40 gap-4 sidebar' }>
        <Link to='/' className='text font-sans font-bold text-xl'>Home</Link>
        <Link to='./Community' className='font-sans font-bold text-xl'>Community</Link>
        <Link to='./BookAppointment' className='font-sans font-bold text-xl'>Book An Appointment</Link>
        <Link to='/Blog' className='font-sans font-bold text-xl'>Blog</Link>
        <Link to='/AboutUs' className='font-sans font-bold text-xl'>About Us</Link>
        <Link to='/SignIn' className=' text font-sans bg-white font-bold text-xl'>Sign-in</Link>
        <Link to='/Register' className=' text font-sans font-bold  text-white text-xl'>Register</Link>
      </div>
    </>
  )
}

export default Nav

