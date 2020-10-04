import React from 'react';

import ali from '../assets/images/ali.png';
import rob from '../assets/images/rob.png';

const About = () => {
  return (
    <div id="about">
      <h2>About Us</h2>
      <div className="flex">
        <div className="max-w-sm">
          <img src={ali} alt="ali" className="rounded-full" />
        </div>
        <div className="max-w-sm">
          <img src={rob} alt="rob" className="rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default About;
