import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../redux/searchSlice";
import "./Navbar.css";

const Navbar = () => {
  
  const cartCount = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + (item.quantity || 0), 0)
  );

  const dispatch = useDispatch();

  return (
    <div className="nav-div">
      <div className="navbar">
        <div className="left-logo">
          <Link className="home-p" >
            <h1>ShoppyGlobe</h1>
          </Link>
        </div>
        <div className="right">
          <input
            type="text"
            placeholder="Search Products.."
            onChange={(e) => dispatch(setSearchTerm(e.target.value))}
          />
          <FaSearch className="search-icon" />
          <Link to="cart">
            <IoCartOutline className="cart-icon" />
          </Link>
          <p className="cart-para">{cartCount}</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
