import styled from 'styled-components';

import LayoutContainer from 'components/layout/Container';
import Typography from 'components/common/Typography';

export const Container = styled(LayoutContainer)`
  background-color: ${props => props.theme.colors.lighGrey};
  text-align: center;
`;

export const Block = styled.div<{ order: number }>`
  @media (max-width: 800px) {
    order: ${props => props.order};
  }
`;

export const PlayersArea = styled.div`
  display: flex;
  flex-direction: column;
  flex-flow: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 26px;
  gap: 50px;

  @media (max-width: 800px) {
    flex-direction: row;
    column-gap: 30px;
  }

  @media (max-width: 400px) {
    column-gap: 0;
  }
`;

export const GameArea = styled(Block)`
  height: 450px;
  width: 450px;
  background-color: ${props => props.theme.colors.white};
  border: solid 1px ${props => props.theme.colors.grey};

  @media (max-width: 800px) {
    flex-basis: 100%;
  }

  @media (max-width: 500px) {
    height: 300px;
    width: 300px;
  }
`;

export const TimerArea = styled(Block)`
  flex-basis: 100%;

  @media (max-width: 800px) {
    flex-basis: 0;
    min-width: 90px;
  }
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  @media (max-width: 500px) {
    transform: scale(0.66);
  }
`;

export const Playing = styled.div`
  margin-top: 10px;
`;

export const Title = styled(Typography).attrs(() => ({
  variant: 'title',
  fontSize: '24px',
  fontStyle: 'bold',
}))``;

export const PlayerLabel = styled(Typography).attrs(() => ({
  variant: 'subtitle1',
  fontSize: '22px',
  fontStyle: 'bold',
}))``;

export const PlayerScoreValue = styled(Typography).attrs(() => ({
  variant: 'subtitle2',
  fontSize: '40px',
  fontStyle: 'bold',
  margin: { top: '10px' },
}))``;
