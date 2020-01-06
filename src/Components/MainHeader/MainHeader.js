import React from "react";
import { Link } from "react-router-dom";
import * as FontAwesome from "react-icons/fa";
import "./MainHeader.css";
const MainHeader = () => {
  return (
    <nav>
      <div className="container-fluid">
        <div className="main-header">
          <div className="navbar-header">
            <Link to="/">
              <img
                className="logo"
                src="https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"
                alt="Udemy"
              />
            </Link>
          </div>
          <div className="category-list">
            <div className="category-menu">
              <Link to="/">
                <span className="menu-logo">
                  {" "}
                  <FontAwesome.FaTh />
                </span>
                <span>Categories</span>
              </Link>
            </div>
          </div>

          <div class="searchbar">
            <div className="search-container">
              <input
                type="text"
                placeholder="Search for anything.."
                name="search"
              />
            </div>
          </div>

          <div className="header-right">
            <div className="udemy-business-teach">
              <Link to="/" className="teach-udemy">
                Udemy for Business
              </Link>
            </div>
            <div className="udemy-business-teach">
              <Link className="teach-udemy">Teach on Udemy </Link>
            </div>
            <div className="divider-bar"></div>
            <div className="cart">
              <div className="cart-size">
                <FontAwesome.FaShoppingCart className="cart-size" />
              </div>
            </div>
            <div className="login">
              <button type="button" className="btn btn-quaternary">
                Log In
              </button>
            </div>
            <div className="signup">
              <button type="button" className="btn btn-primary">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainHeader;
