import styled from 'styled-components';

import LayoutContainer from 'components/layout/Container';
import Typography from 'components/common/Typography';

export const Container = styled(LayoutContainer)`
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: ${props => props.theme.colors.lighGrey};
  text-align: center;
`;

export const PlayersArea = styled.div`
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 26px;
  gap: 100px;
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
