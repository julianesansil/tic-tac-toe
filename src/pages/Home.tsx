import React from 'react';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import Profile from 'components/home/Profile';

const Home = (): React.ReactElement => {
  return (
    <>
      <Header />
      <Profile />
      <Footer />
    </>
  );
};

export default Home;
