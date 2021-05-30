import React from 'react';

import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import Profile from 'components/home/Profile';
import TicTacToe from 'components/home/TicTacToe';

const Home = (): React.ReactElement => {
  return (
    <>
      <Header />
      <Profile />
      <TicTacToe />
      <Footer />
    </>
  );
};

export default Home;
