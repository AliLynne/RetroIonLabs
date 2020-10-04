import React from 'react';
import Toolbar from './Toolbar';

const Footer = ({ toolbar }) => {
  return (
    <footer className="p-3">
      <Toolbar toolbar={toolbar} />
    </footer>
  );
};

export default Footer;
