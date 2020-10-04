import React from 'react';
import { Box, useToolbarState } from 'reakit';

import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const toolbar = useToolbarState({ loop: true });

  return (
    <div className="container h-screen flex flex-col bg-white text-black dark:bg-black dark:text-white">
      <Header title="Retro Ion Labs" toolbar={toolbar} />
      <Box as="main" id="main-content" className="flex-grow p-3">
        <About />
      </Box>
      <Footer toolbar={toolbar} />
    </div>
  );
}

export default App;
