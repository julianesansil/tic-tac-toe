import styled from 'styled-components';
import LayoutContainer from 'components/layout/Container';
import Typography from 'components/common/Typography';

export const Container = styled(LayoutContainer)`
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: ${props => props.theme.colors.white};
  text-align: center;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  gap: 6px;
  margin-bottom: 30px;
`;

export const GameHistory = styled.div`
  display: flex;
  flex-grow: wrap;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
`;

export const PlayersInfo = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 24px;

  & > div > div {
    display: flex;
    gap: 10px;
  }
`;

export const Title = styled(Typography).attrs(() => ({
  variant: 'subtitle1',
  fontSize: '24px',
  fontStyle: 'bold',
}))``;

export const Subtitle = styled(Typography).attrs(() => ({
  variant: 'subtitle2',
  fontSize: '20px',
  fontStyle: 'bold',
  margin: { bottom: '16px' },
}))``;

export const PlayerLabel = styled(Typography).attrs(() => ({
  fontSize: '18px',
  margin: { bottom: '8px' },
}))``;

export const PlayerPercentage = styled(Typography).attrs(() => ({
  fontColor: 'white',
  fontStyle: 'bold',
}))``;

export const VL = styled(Typography).attrs(() => ({
  fontSize: '12px',
  margin: { top: '8px' },
}))``;

export const Bagde = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  background-color: ${props => props.theme.colors.newGrey};
  border-radius: 50%;
`;

export const CheckMark = styled.div<{ checked: boolean }>`
  height: 16px;
  width: 16px;
  background-color: ${props =>
    props.theme.colors[props.checked ? 'newGrey' : 'white']};
  border: solid 1px ${props => props.theme.colors.newGrey};
  border-radius: 50%;
`;

export const Square = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 26px;
  width: 26px;
  border: solid 1px ${props => props.theme.colors.newGrey};
`;
