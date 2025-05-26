import React from 'react'
import { NavLink } from 'react-router-dom'
import { SiIfood } from "react-icons/si";

const NavBar = () => {
  return (
    <div className=' flex max-w-full justify-between items-center  text-blue-50  px-8 py-6  bg-zinc-950 fixed left-0 right-0 top-0  '>
      <div className='text-md flex  items-center gap-2 justify-center '>
        <span className='text-2xl  font-semibold '>Kitchen Chronicles</span>
        <SiIfood className='text-3xl ' /> </div>

      <div className='flex items-center gap-6 text-md font-semibold '>
        <NavLink className={(e) => e.isActive ? 'text-red-300 ' : ""} to="/" >
          Home
        </NavLink>
        <NavLink className={(e) => e.isActive ? 'text-red-300 ' : ""} to="/recipes" >
          Recipes
        </NavLink>
        <NavLink className={(e) => e.isActive ? 'text-red-300 ' : ""} to="/create" >
          Create
        </NavLink>

        <NavLink className={(e) => e.isActive ? 'text-red-300 ' : ""} to="/favourite" >
          Favourite
        </NavLink>
          <NavLink className={(e) => e.isActive ? 'text-red-300 ' : ""} to="/about" >
          About
        </NavLink>
      </div>

    </div>
  )
}

export default NavBar