import React, { useEffect, useRef, useState } from 'react';

import { MAX_MATCHES, MAX_VICTORIES } from 'constants/game';
import { GameHistoryContext, GameInfo } from 'context/GameHistoryContext';

import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import ProfileSection from 'components/home/ProfileSection';
import GameSection from 'components/home/GameSection';
import StatisticsSection from 'components/home/StatisticsSection';

const Home = (): React.ReactElement => {
  const newGameHistory = {
    winnersPerMatch: [],
    scoreBoard: {
      P1: 0,
      P2: 0,
      tie: 0,
    },
    totalSeconds: 0,
  };
  const [gameHistory, setGameHistory] = useState<GameInfo>(newGameHistory);
  const [resetNextMatch, setResetNextMatch] = useState<boolean>(false);

  const statisticsRef = useRef<HTMLDivElement>(null);

  const endGame = () => {
    setResetNextMatch(true);

    let message = 'Game over!';
    if (gameHistory.scoreBoard.P1 === MAX_VICTORIES) {
      message += '\nCongrats, player 1, you won the game! \\o/';
    } else if (gameHistory.scoreBoard.P2 === MAX_VICTORIES) {
      message += '\nCongrats, player 2, you won the game! \\o/';
    } else if (gameHistory.winnersPerMatch.length === MAX_MATCHES) {
      message += ' Oh, it tied! :(\nPlay again...';
    }

    setTimeout(() => {
      alert(message);
      statisticsRef?.current?.scrollIntoView();
    }, 500);
  };

  useEffect(() => {
    setResetNextMatch(false);
    if (
      gameHistory.winnersPerMatch.length === MAX_MATCHES ||
      gameHistory.scoreBoard.P1 === MAX_VICTORIES ||
      gameHistory.scoreBoard.P2 === MAX_VICTORIES
    ) {
      endGame();
    }
  }, [gameHistory.scoreBoard]);

  return (
    <>
      <Header />
      <ProfileSection />

      <GameHistoryContext.Provider
        value={{
          info: gameHistory,
          setInfo: setGameHistory,
          resetContext: () => setGameHistory(newGameHistory),
        }}
      >
        <GameSection resetNextMatch={resetNextMatch} />
        <div ref={statisticsRef}>
          <StatisticsSection />
        </div>
      </GameHistoryContext.Provider>

      <Footer />
    </>
  );
};

export default Home;
