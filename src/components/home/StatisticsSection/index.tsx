import React, { useEffect, useState } from 'react';

import { useGameHistory } from 'contexts/GameHistoryContext';
import Typography from 'components/common/Typography';
import {
  Container,
  Flex,
  GameHistory,
  Title,
  Subtitle,
  PlayerLabel,
  CheckMark,
  Square,
} from './styles';

const StatisticsSection = (): React.ReactElement => {
  const gameHistoryContext = useGameHistory();
  const maxMatches = 9;

  const [playedMatchs, setPlayedMatchs] = useState<boolean[]>(
    new Array(maxMatches).fill(false),
  );
  const [winners, setWinners] = useState<string[]>(
    new Array(maxMatches).fill(undefined),
  );
  const [winPercentage1, setWinPercentage1] = useState<number>(0);
  const [lossPercentage1, setLossPercentage1] = useState<number>(0);

  useEffect(() => {
    setPlayedMatchs(
      playedMatchs.map(
        (checked, index) => index < gameHistoryContext.victoriesHistory.length,
      ),
    );
    setWinners(
      winners.map(
        (winner, index) => gameHistoryContext.victoriesHistory[index],
      ),
    );
  }, [gameHistoryContext.victoriesHistory]);

  return (
    <Container as="section">
      <Title>Awesome Statistics</Title>

      <Typography margin={{ top: '14px', bottom: '60px' }}>
        All statistics in one place...
      </Typography>

      <GameHistory>
        <div>
          <Subtitle>Game victories %</Subtitle>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <PlayerLabel>Player 1</PlayerLabel>
            <div
              style={{
                height: '50px',
                width: '50px',
                borderRadius: '50%',
                backgroundColor: 'red',
              }}
            >
              <Typography>36%</Typography>
            </div>

            <PlayerLabel>Player 2</PlayerLabel>
          </div>
        </div>

        <div>
          <Subtitle>Played matchs</Subtitle>
          <Flex>
            {playedMatchs.map(checked => (
              <CheckMark checked={checked} />
            ))}
          </Flex>

          <Subtitle>Game history</Subtitle>
          <Flex>
            {winners.map(winner => (
              <Square>
                <Typography>{winner}</Typography>
              </Square>
            ))}
          </Flex>
        </div>
      </GameHistory>

      <div>
        <Subtitle>Total time</Subtitle>
      </div>
    </Container>
  );
};

export default StatisticsSection;
