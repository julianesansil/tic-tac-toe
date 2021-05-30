import React from 'react';

import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import ProfileSection from 'components/home/ProfileSection';
import GameSection from 'components/home/GameSection';

const Home = (): React.ReactElement => {
  return (
    <>
      <Header />
      <ProfileSection />
      <GameSection />
      <Footer />
    </>
  );
};

export default Home;
