import React from 'react'
import Navbar from './Navbar'
import "./Header.css"
const Header = () => {
  return (
    <>
      <Navbar />
      <div className="header">
        <div className="header-div">
          <div className="header-category">
            <h2>Category : </h2>
            <button>All</button>
            <button>Beauty</button>
            <button>Frangrances</button>
            <button>Furniture</button>
            <button>Groceries</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header
