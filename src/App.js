import React from 'react';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import Menu from './components/menu/Menu';

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
