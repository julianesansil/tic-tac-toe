import React, { useEffect, useState } from 'react';

import SWORDLogo from 'assets/images/SWORD_Health_logo.svg';
import Typography from 'components/common/Typography';
import { FixedContainer, FlexContainer } from './styles';

const Header = (): React.ReactElement => {
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
    <FixedContainer
      as="header"
      isTransparentBackground={isTransparentBackground}
    >
      <FlexContainer>
        <img src={SWORDLogo} alt="SWORD Health logo" height="46px" />

        <div>
          <Typography variant="subtitle1" fontStyle="bold" textAlign="end">
            Frontend Developer
          </Typography>

          <Typography
            variant="body"
            fontStyle="italic"
            textAlign="end"
            margin={{ top: '4px' }}
          >
            Challenge
          </Typography>
        </div>
      </FlexContainer>
    </FixedContainer>
  );
};

export default Header;
