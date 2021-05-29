import React from 'react';
import Profile from 'components/home/Profile';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';

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
