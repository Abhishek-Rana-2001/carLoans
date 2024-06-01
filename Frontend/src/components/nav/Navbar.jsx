import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex justify-between p-5 px-7 md:px-40 fixed top-0 w-full'>
        <span>
            <h2>Logo Here</h2>
        </span>
      <u className='flex gap-4 list-none no-underline'l>
        <li><NavLink className={"p-2 hover:shadow-md"} to={"/"}>Home</NavLink></li>
        <li><NavLink className={"p-2 hover:shadow-md"} to={"/about"}>About</NavLink></li>
        <li><NavLink className={"p-2 hover:shadow-md"} to={"/contact"}>Contact</NavLink></li>
        <li><NavLink className={"p-2 hover:shadow-md"} to={"/help"}>Help</NavLink></li>
      </u>
    </nav>
  )
}

export default Navbar
