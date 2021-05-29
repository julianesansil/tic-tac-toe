import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Boundary from './Boundary';
import Typography from './Typography';
import SWORDLogo from '../../assets/images/SWORD_Health_logo.svg';

const FixedHeader = styled.header<{ isTransparentBackground: boolean }>`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${props =>
    props.isTransparentBackground ? 'transparent' : props.theme.colors.grey};
`;

const Container = styled(Boundary)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 16px;
  padding-bottom: 16px;
`;

const Header: React.FC = () => {
  const [isTransparentBackground, setIsTransparentBackground] =
    useState<boolean>(false);

  const handleScroll = () => {
    const { scrollY } = window;
    if (scrollY > 150) {
      setIsTransparentBackground(true);
    } else {
      setIsTransparentBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <FixedHeader isTransparentBackground={isTransparentBackground}>
      <Container>
        <img src={SWORDLogo} alt="SWORD Health logo" height="46px" />

        <div>
          <Typography variant="subtitle2" fontStyle="bold">
            Frontend Developer
          </Typography>

          <Typography variant="body" fontStyle="italic" margin={{ top: '4px' }}>
            Challenge
          </Typography>
        </div>
      </Container>
    </FixedHeader>
  );
};

export default Header;