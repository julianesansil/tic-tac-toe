import React, { useEffect, useState } from 'react';

import { ThemeColors } from 'theme';
import { MAX_MATCHS } from 'constants/game';
import TimeHelper from 'helpers/timeHelper';

import { PlayerOption, useGameHistory } from 'context/GameHistoryContext';
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

const GameStatisticsSection = React.forwardRef<HTMLElement>((props, ref) => {
  // const GameStatisticsSection = (): React.ReactElement => {
  const gameHistoryContext = useGameHistory();
  const matchsCounter = gameHistoryContext.info.winnersPerMatch.length;

  const [playedMatchs, setPlayedMatchs] = useState<boolean[]>(
    new Array(MAX_MATCHS).fill(false),
  );
  const [winners, setWinners] = useState<string[]>(
    new Array(MAX_MATCHS).fill(undefined),
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
      return (gameHistoryContext.info.scoreBoard[player] / matchsCounter) * 100;
    }
    return 0;
  };

  const renderPercentageBadge = (
    player: PlayerOption,
    isVictoryBadge?: boolean,
  ) => {
    const victoriesPercentage = calculateVictoriesPercentage(player);
    let backgroundColor: ThemeColors = 'newGrey';

    const oneThird = 100 / 3;
    if (matchsCounter > 0 && isVictoryBadge) {
      if (victoriesPercentage <= oneThird) {
        backgroundColor = 'red';
      } else if (victoriesPercentage >= 2 * oneThird) {
        backgroundColor = 'green';
      } else {
        backgroundColor = 'yellow';
      }
    }

    return (
      <>
        <Bagde backgroundColor={backgroundColor}>
          <PlayerPercentage>
            {Math.floor(victoriesPercentage)}%
          </PlayerPercentage>
        </Bagde>
        {isVictoryBadge === true && <VL>V</VL>}
        {isVictoryBadge === false && <VL>F</VL>}
      </>
    );
  };

  return (
    <Container as="section" ref={ref}>
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
                <div>{renderPercentageBadge('P1', true)}</div>
                <div>{renderPercentageBadge('P2', false)}</div>
              </div>
            </div>

            <div>
              <PlayerLabel>Player 2</PlayerLabel>
              <div>
                <div>{renderPercentageBadge('P2', true)}</div>
                <div>{renderPercentageBadge('P1', false)}</div>
              </div>
            </div>

            <div>
              <PlayerLabel>Ties</PlayerLabel>
              <div>{renderPercentageBadge('tie')}</div>
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
  // };
});

export default GameStatisticsSection;
