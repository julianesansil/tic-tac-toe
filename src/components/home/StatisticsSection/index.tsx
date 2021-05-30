import React, { useEffect, useState } from 'react';

import TimeHelper from 'helpers/timeHelper';
import { useGameHistory } from 'contexts/GameHistoryContext';
import Typography from 'components/common/Typography';
import {
  Container,
  Flex,
  GameHistory,
  PlayersInfo,
  Title,
  Subtitle,
  PlayerLabel,
  PlayerPercentage,
  VL,
  Bagde,
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
  const [vPercentage1, setVPercentage1] = useState<number>(0);
  const [vPercentage2, setVPercentage2] = useState<number>(0);
  const [tiePercentage, setTiePercentage] = useState<number>(0);

  useEffect(() => {
    const matchsCounter = gameHistoryContext.victoriesHistory.length;

    let victories1 = 0;
    let victories2 = 0;
    let ties = 0;
    gameHistoryContext.victoriesHistory.forEach(winner => {
      if (winner === 'P1') {
        victories1 += 1;
      }
      if (winner === 'P2') {
        victories2 += 1;
      }
      if (winner === '-') {
        ties += 1;
      }
    });
    setVPercentage1(
      matchsCounter ? Math.floor((victories1 / matchsCounter) * 100) : 0,
    );
    setVPercentage2(
      matchsCounter ? Math.floor((victories2 / matchsCounter) * 100) : 0,
    );
    setTiePercentage(
      matchsCounter ? Math.floor((ties / matchsCounter) * 100) : 0,
    );

    setPlayedMatchs(
      playedMatchs.map((checked, index) => index < matchsCounter),
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

          <PlayersInfo>
            <div>
              <PlayerLabel>Player 1</PlayerLabel>
              <div>
                <div>
                  <Bagde>
                    <PlayerPercentage>{vPercentage1}%</PlayerPercentage>
                  </Bagde>
                  <VL>V</VL>
                </div>

                <div>
                  <Bagde>
                    <PlayerPercentage>{vPercentage2}%</PlayerPercentage>
                  </Bagde>
                  <VL>L</VL>
                </div>
              </div>
            </div>

            <div>
              <PlayerLabel>Player 2</PlayerLabel>
              <div>
                <div>
                  <Bagde>
                    <PlayerPercentage>{vPercentage2}%</PlayerPercentage>
                  </Bagde>
                  <VL>V</VL>
                </div>

                <div>
                  <Bagde>
                    <PlayerPercentage>{vPercentage1}%</PlayerPercentage>
                  </Bagde>
                  <VL>L</VL>
                </div>
              </div>
            </div>

            <div>
              <PlayerLabel>Ties</PlayerLabel>
              <Bagde>
                <PlayerPercentage>{tiePercentage}%</PlayerPercentage>
              </Bagde>
            </div>
          </PlayersInfo>
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
        <Typography fontSize="22px">
          {TimeHelper.toHHMMSS(gameHistoryContext.totalSeconds)}
        </Typography>
      </div>
    </Container>
  );
};

export default StatisticsSection;
