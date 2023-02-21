import React from "react";
import logo from '../images/logo-mesto.svg';

function Header () {
  return (
    <header className="header root__header">
      <img className='header__logo' src={logo} alt="Логотип: Место"/>
    </header>
  )
}

export default Header;