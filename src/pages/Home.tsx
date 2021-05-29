import React from 'react';
import styled from 'styled-components';

import Header from '../components/Layout/Header';

const Heading = styled.h1`
  color: ${props => props.theme.colors.blue};
`;

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Heading>Tic Tac Toe</Heading>
    </>
  );
};

export default Home;
