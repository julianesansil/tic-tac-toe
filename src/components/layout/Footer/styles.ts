import styled from 'styled-components';
import Typography from 'components/common/Typography';
import Container from '../Container';

export const FlexContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: ${props => props.theme.colors.lighGrey};
`;

export const Section = styled.section`
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
  gap: 8px;
  margin-bottom: 8px;
`;

export const Title = styled(Typography).attrs(() => ({
  variant: 'subtitle1',
}))``;

export const Text = styled(Typography).attrs(() => ({
  fontSize: '12px',
}))``;
