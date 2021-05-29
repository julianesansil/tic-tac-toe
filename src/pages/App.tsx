import React from 'react';
import { ThemeProvider } from 'styled-components';

import defaultTheme from 'theme';
import GlobalStyle from 'style';
import Home from './Home';

const App = (): React.ReactElement => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
};

export default App;
