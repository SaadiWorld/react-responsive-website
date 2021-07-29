import React, { useState } from 'react';
import MobileNavbar from '../components/MobileNavBar';
import Navbar from '../components/Navbar';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MobileNavbar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
    </>
  );
};

export default Home;
