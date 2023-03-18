import React from "react";
import "./Header.css";
import {FaSearch} from 'react-icons/fa' 
import {BsCart2} from 'react-icons/bs'
import{BrowserRouter as Router,Link} from 'react-router-dom'
function Header() {  
  return (
    <div className="header">
      <Router>
        <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
        </Link>
        </Router>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <Router>
          <Link to={"/class"}>
        <FaSearch className="header__searchIcon" />
        </Link>
        </Router>
      </div>

      <div className="header__nav">
        
          <div className="header__option">
            <span className="header__optionLineOne">Hello Guest</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        

        
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        
        

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        
          <div className="header__optionBasket">
          <Router>  
        <Link to='/Basket'>
            <div className="BsCart2"><BsCart2 /></div>
            </Link>
         </Router>
            <span className="header__optionLineTwo header__basketCount">
              0
            </span>
          </div>
        
      </div>
    </div>
  );
}

export default Header;