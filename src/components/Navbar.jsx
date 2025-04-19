import React from 'react'
// React Icons used
import { IoCartOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='nav-div' >
      <div className='navbar' >
        <div className='left-logo' >
            <h1>ShoppyGlobe</h1>
        </div>
        <div className='right' >
            <input type="text" placeholder='Search Products..' />
              <FaSearch className='search-icon' />
            <IoCartOutline className="cart-icon" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
