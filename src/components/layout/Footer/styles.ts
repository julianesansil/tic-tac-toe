import styled from 'styled-components';
import Typography from 'components/common/Typography';
import Container from '../Container';

export const FlexContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background-color: ${props => props.theme.colors.lighGrey};
  gap: 30px;
  text-align: center;

  @media (min-width: 576px) {
    flex-direction: row;
    text-align: start;
  }
`;

export const Column = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Center = styled.div`
  width: fit-content;
  margin-right: auto;
  margin-left: auto;
`;

export const SocialMedia = styled.div`
  display: flex;
  margin-bottom: 10px;
  gap: 8px;
  justify-content: center;

  @media (min-width: 576px) {
    justify-content: start;
  }
`;

export const Title = styled(Typography).attrs(() => ({
  variant: 'subtitle1',
  fontSize: '18px',
}))``;

export const Text = styled(Typography).attrs(() => ({
  fontSize: '15px',
}))``;
