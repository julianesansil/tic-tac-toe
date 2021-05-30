import React, { useState } from 'react';

import Typography from 'components/common/Typography';
import Button from 'components/common/Button';
import Timer from 'components/common/Timer';
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
  const [selectedGame, setSelectedGame] = useState<GameId>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

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
          <Timer isActive={isPlaying} variant="subtitle2" fontSize="18px" />
        </TimerArea>
      </PlayersArea>
    </Container>
  );
};

export default GameSection;
