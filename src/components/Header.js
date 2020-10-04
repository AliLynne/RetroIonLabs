import React from 'react';
import Toolbar from './Toolbar';

import logo from '../assets/images/logo.png';

const Header = ({ title = 'Page Title', toolbar }) => {
  return (
    <header className="flex justify-between items-center p-3">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="w-24" />
        <h1>{title}</h1>
      </div>

      <Toolbar toolbar={toolbar} />
    </header>
  );
};

export default Header;
