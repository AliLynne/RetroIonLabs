import React from 'react';
import Toolbar from './Toolbar'

const Header = ({ title = 'Page Title', toolbar }) => {
  return (
    <header className="flex justify-between p-3">
      <h1>{title}</h1>
      <Toolbar toolbar={toolbar} />
    </header>
  );
};

export default Header;
