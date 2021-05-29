import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import defaultTheme from '../theme';
import GlobalStyle from '../style';

const Heading = styled.h1`
  color: ${props => props.theme.colors.blue};
`;

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Heading>Tic Tac Toe</Heading>
    </ThemeProvider>
  );
};

export default App;
