import styled from 'styled-components';
import Container from '../Container';

export const FixedContainer = styled.div<{ isTransparentBackground: boolean }>`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;

  background-color: ${props => props.theme.colors.grey};
  opacity: ${props => props.isTransparentBackground && 0.6};
  transition: opacity 0.5s ease;
`;

export const FlexContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 16px;
  padding-bottom: 16px;

  @media (min-width: 340px) {
    flex-direction: row;
  }
`;
