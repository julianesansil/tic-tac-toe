import React, { useState } from 'react';

import Typography from 'components/common/Typography';
import Button from 'components/common/Button';
import TicTacToe from './TicTacToe';
import {
  Container,
  PlayersArea,
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
        <div>
          <PlayerLabel>Player 1</PlayerLabel>
          <PlayerScoreValue>1</PlayerScoreValue>
        </div>

        <TicTacToe />

        <div>
          <PlayerLabel>Player 2</PlayerLabel>
          <PlayerScoreValue>2</PlayerScoreValue>
        </div>
      </PlayersArea>
    </Container>
  );
};

export default GameSection;
