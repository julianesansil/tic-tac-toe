import React, { useEffect, useRef, useState } from 'react';

import { MAX_MATCHS, MAX_VICTORIES } from 'constants/game';
import { GameHistoryContext, GameInfo } from 'context/GameHistoryContext';

import GameSection from './GameSection';
import GameStatisticsSection from './GameStatisticsSection';

const GameEnvironment = (): React.ReactElement => {
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

  const statisticsSectionRef = useRef<HTMLElement>(null);

  const endGame = () => {
    setResetNextMatch(true);

    let message = 'Game over!';
    if (gameHistory.scoreBoard.P1 === MAX_VICTORIES) {
      message += '\nCongrats, player 1, you won the game! \\o/';
    } else if (gameHistory.scoreBoard.P2 === MAX_VICTORIES) {
      message += '\nCongrats, player 2, you won the game! \\o/';
    } else if (gameHistory.winnersPerMatch.length === MAX_MATCHS) {
      message += ' Oh, it tied! :(\nPlay again...';
    }

    setTimeout(() => {
      alert(message);
      statisticsSectionRef?.current?.scrollIntoView();
    }, 500);
  };

  useEffect(() => {
    setResetNextMatch(false);
    if (
      gameHistory.winnersPerMatch.length === MAX_MATCHS ||
      gameHistory.scoreBoard.P1 === MAX_VICTORIES ||
      gameHistory.scoreBoard.P2 === MAX_VICTORIES
    ) {
      endGame();
    }
  }, [gameHistory.scoreBoard]);

  return (
    <main>
      <GameHistoryContext.Provider
        value={{
          info: gameHistory,
          setInfo: setGameHistory,
          resetContext: () => setGameHistory(newGameHistory),
        }}
      >
        <GameSection resetNextMatch={resetNextMatch} />
        <GameStatisticsSection ref={statisticsSectionRef} />
      </GameHistoryContext.Provider>
    </main>
  );
};

export default GameEnvironment;
