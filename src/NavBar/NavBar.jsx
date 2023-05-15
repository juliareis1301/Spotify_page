import React from 'react';
import './NavBar.css';
import logo from '../imagens/logo.png';
import Menu from '../Menu/Menu';

function NavBar() {
  return (
    <nav className='nav__bar'>
      <img src={logo} alt='logo-spotify' width='120'  ></img>
      <Menu />
    </nav>
  );
}

export default NavBar;