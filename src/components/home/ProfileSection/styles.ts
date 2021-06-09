import styled from 'styled-components';
import Container from 'components/layout/Container';
import Typography from 'components/common/Typography';

export const FlexContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const Column1 = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: start;
  }
`;

export const Column2 = styled.div`
  flex: 1;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
  height: 120px;
  width: 120px;
`;

export const SpacedText = styled(Typography).attrs(() => ({
  lineHeight: 'spaced',
}))``;
