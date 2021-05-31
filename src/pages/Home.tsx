import React from 'react';

import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import ProfileSection from 'components/home/ProfileSection';
import GameEnvironment from 'components/home/GameEnvironment';

const Home = (): React.ReactElement => {
  return (
    <>
      <Header />
      <ProfileSection />
      <GameEnvironment />
      <Footer />
    </>
  );
};

export default Home;
