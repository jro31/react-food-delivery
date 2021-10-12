import React from 'react';
import Navbar from './navbar/Navbar';
import Banner from './banner/Banner';
import Menu from './menu/Menu';

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Banner />
      <Menu />
    </React.Fragment>
  );
}

export default App;
