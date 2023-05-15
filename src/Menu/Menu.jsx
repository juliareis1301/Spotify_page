import React, { useState } from 'react';
import './Menu.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';

function Menu() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuCLick = () => {
    setShowMenu(!showMenu);
  }

  return (
    <div className='Menu'>
      <button className='menu-toggle' onClick={handleMenuCLick}></button>
      {showMenu ? <FaTimes className='close-icon' /> : <GiHamburgerMenu className='open-icon' />}
      <ul className={`options ${showMenu ? 'show' : ''}`}>
        <li>Premium</li>
        <li>Suporte</li>
        <li>Baixar</li>
        <li>|</li>
        <li className='green-link'>Inscrever-se</li>
        <li className='green-link'>Entrar</li>
      </ul>
    </div>
  );
}

export default Menu;
