import React, { useState } from 'react';

import { GameHistoryContext, PlayerOption } from 'contexts/GameHistoryContext';

import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import ProfileSection from 'components/home/ProfileSection';
import GameSection from 'components/home/GameSection';
import StatisticsSection from 'components/home/StatisticsSection';

const Home = (): React.ReactElement => {
  const [victoriesHistory, setVictoriesHistory] = useState<PlayerOption[]>([]);
  const [totalSeconds, setTotalSeconds] = useState<number>(0);

  return (
    <>
      <Header />
      <ProfileSection />

      <GameHistoryContext.Provider
        value={{
          victoriesHistory,
          setVictoriesHistory,
          totalSeconds,
          setTotalSeconds,
        }}
      >
        <GameSection />
        <StatisticsSection />
      </GameHistoryContext.Provider>

      <Footer />
    </>
  );
};

export default Home;
