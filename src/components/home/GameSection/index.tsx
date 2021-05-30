import React, { useEffect, useRef, useState } from 'react';

import TimerHelper from 'helpers/timerHelper';
import { useGameHistory } from 'contexts/GameHistoryContext';
import Typography from 'components/common/Typography';
import Button from 'components/common/Button';
import TicTacToe from './TicTacToe';
import {
  Container,
  Block,
  PlayersArea,
  GameArea,
  TimerArea,
  Center,
  Title,
  PlayerLabel,
  PlayerScoreValue,
} from './styles';

const GAME_INFO = {
  0: {
    name: '3x3',
    gridSize: 3,
  },
  1: {
    name: '6x6',
    gridSize: 6,
  },
  2: {
    name: '9x9',
    gridSize: 9,
  },
};
type GameId = keyof typeof GAME_INFO;

const GameSection = (): React.ReactElement => {
  const gameHistoryContext = useGameHistory();
  const initialTimer = '00:00:00';

  const [selectedGame, setSelectedGame] = useState<GameId>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [timer, setTimer] = useState<string>(initialTimer);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const counterRef = useRef<number>(0);

  useEffect(() => {
    if (isPlaying) {
      setTimer(initialTimer);
      counterRef.current = 0;

      intervalRef.current = setInterval(() => {
        counterRef.current += 1;
        setTimer(TimerHelper.toHHMMSS(counterRef.current));
      }, 1000);
    } else {
      if (counterRef.current) {
        gameHistoryContext.setTotalSeconds(
          (gameHistoryContext.totalSeconds + counterRef.current) as number,
        );
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current as NodeJS.Timeout);
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    return () => clearInterval(intervalRef.current as NodeJS.Timeout);
  }, []);

  const renderGameTab = (gameId: GameId) => {
    const game = GAME_INFO[gameId];
    return (
      <Button
        selected={selectedGame === gameId}
        onClick={() => setSelectedGame(gameId)}
      >
        {selectedGame === gameId ? 'Tic Tac Toe' : 'TTT'} {game.name}
      </Button>
    );
  };

  return (
    <Container as="section">
      <Title>Tic Tac Toe Games</Title>

      <Typography margin={{ top: '14px', bottom: '26px' }}>
        Welcome to the best game in the world!
      </Typography>

      <div>
        {renderGameTab(0)}
        {renderGameTab(1)}
        {renderGameTab(2)}
      </div>

      <PlayersArea>
        <Block order={2}>
          <PlayerLabel>Player 1</PlayerLabel>
          <PlayerScoreValue>1</PlayerScoreValue>
        </Block>

        <GameArea order={1}>
          <Center>
            <TicTacToe
              newGame={isPlaying}
              gridSize={GAME_INFO[selectedGame].gridSize}
              setIsPlaying={setIsPlaying}
            />
          </Center>
        </GameArea>

        <Block order={4}>
          <PlayerLabel>Player 2</PlayerLabel>
          <PlayerScoreValue>2</PlayerScoreValue>
        </Block>

        <TimerArea order={3}>
          {isPlaying ? (
            <Typography margin={{ top: '12px', bottom: '16px' }}>
              Playing...
            </Typography>
          ) : (
            <Button
              backgroundColor="grey"
              disabled={isPlaying}
              onClick={() => setIsPlaying(true)}
            >
              START!
            </Button>
          )}

          <Typography
            variant="subtitle2"
            fontSize="18px"
            margin={{ top: '12px' }}
          >
            {timer}
          </Typography>
        </TimerArea>
      </PlayersArea>
    </Container>
  );
};

export default GameSection;
