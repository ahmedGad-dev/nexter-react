import React from 'react'
import Logo from '../../assets/img/logo.png'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar bg-cyan-600 text-white d-flex space-around">
     <div className="navbar-start">
      <div className="dropdown">
       <label tabIndex={0} className="btn btn-ghost lg:hidden">
         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
       </label>
       <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 bg-blue-900">
         <li><Link>Item 1</Link></li>
         <li tabIndex={0}>
           <Link className="justify-between">
             Parent
             <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
           </Link>
           <ul className="p-2 bg-blue-900">
             <li><Link>Submenu 1</Link></li>
             <li><Link>Submenu 2</Link></li>
           </ul>
         </li>
        <li><Link>Item 3</Link></li>
      </ul>
     </div>
     <img src={Logo} alt='logo' className='w-18 h-8' />
  </div>
  
   <div className="navbar-end justify-end relative">
    <div className="hidden lg:flex mr-6">
     <ul className="menu menu-horizontal p-0">
      <li><Link>Item 1</Link></li>
      <li tabIndex={0}>
        <Link>
          Parent
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </Link>
        <ul className="p-2">
          <li><Link>Submenu 1</Link></li>
          <li><Link>Submenu 2</Link></li>
        </ul>
      </li>
      <li><Link>Item 3</Link></li>
     </ul>
    </div>
 
    <div className=" dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://placeimg.com/80/80/people" alt='profile' />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2  rounded-box w-52 bg-gray-900">
        <li className='hover:bg-gray-100 hover:text-black'>
          <Link className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li className='hover:bg-gray-100 hover:text-black'><Link>Settings</Link></li>
        <li className='hover:bg-gray-100 hover:text-black'><Link>Logout</Link></li>
      </ul>
    </div>
  </div>
 </div>
  )
}

export default Navbar