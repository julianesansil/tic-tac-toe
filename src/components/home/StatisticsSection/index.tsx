import React, { useEffect, useState } from 'react';

import { MAX_MATCHES } from 'constants/game';
import TimeHelper from 'helpers/timeHelper';
import { PlayerOption, useGameHistory } from 'contexts/GameHistoryContext';
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
  const matchsCounter = gameHistoryContext.info.winnersPerMatch.length;

  const [playedMatchs, setPlayedMatchs] = useState<boolean[]>(
    new Array(MAX_MATCHES).fill(false),
  );
  const [winners, setWinners] = useState<string[]>(
    new Array(MAX_MATCHES).fill(undefined),
  );

  useEffect(() => {
    setPlayedMatchs(
      playedMatchs.map((checked, index) => index < matchsCounter),
    );
    setWinners(
      winners.map(
        (winner, index) => gameHistoryContext.info.winnersPerMatch[index],
      ),
    );
  }, [gameHistoryContext.info.winnersPerMatch]);

  const calculateVictoriesPercentage = (player: PlayerOption) => {
    if (matchsCounter) {
      return Math.floor(
        (gameHistoryContext.info.scoreBoard[player] / matchsCounter) * 100,
      );
    }
    return 0;
  };

  return (
    <Container as="section" id="statistics-section">
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
                  <Bagde backgroundColor="green">
                    <PlayerPercentage>
                      {calculateVictoriesPercentage('P1')}%
                    </PlayerPercentage>
                  </Bagde>
                  <VL>V</VL>
                </div>

                <div>
                  <Bagde backgroundColor="red">
                    <PlayerPercentage>
                      {calculateVictoriesPercentage('P2')}%
                    </PlayerPercentage>
                  </Bagde>
                  <VL>L</VL>
                </div>
              </div>
            </div>

            <div>
              <PlayerLabel>Player 2</PlayerLabel>
              <div>
                <div>
                  <Bagde backgroundColor="green">
                    <PlayerPercentage>
                      {calculateVictoriesPercentage('P2')}%
                    </PlayerPercentage>
                  </Bagde>
                  <VL>V</VL>
                </div>

                <div>
                  <Bagde backgroundColor="red">
                    <PlayerPercentage>
                      {calculateVictoriesPercentage('P1')}%
                    </PlayerPercentage>
                  </Bagde>
                  <VL>L</VL>
                </div>
              </div>
            </div>

            <div>
              <PlayerLabel>Ties</PlayerLabel>
              <Bagde backgroundColor="yellow">
                <PlayerPercentage>
                  {calculateVictoriesPercentage('tie')}%
                </PlayerPercentage>
              </Bagde>
            </div>
          </PlayersInfo>
        </div>

        <div>
          <div>
            <Subtitle>Played matchs</Subtitle>
            <Flex>
              {playedMatchs.map((checked, index) => (
                <CheckMark key={index} checked={checked} />
              ))}
            </Flex>
          </div>

          <div>
            <Subtitle>Game history</Subtitle>
            <Flex>
              {winners.map((winner, index) => (
                <Square key={index}>
                  <Typography>{winner}</Typography>
                </Square>
              ))}
            </Flex>
          </div>
        </div>
      </GameHistory>

      <div>
        <Subtitle>Total time</Subtitle>
        <Typography fontSize="22px">
          {TimeHelper.toHHMMSS(gameHistoryContext.info.totalSeconds)}
        </Typography>
      </div>
    </Container>
  );
};

export default StatisticsSection;
