import React from 'react';
import styled from 'styled-components';

import SWORDLogo from '../../assets/images/SWORD_Health_logo.svg';
import Typography from '../Typography';

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`;

const Header: React.FC = () => {
  return (
    <header>
      <FlexContainer>
        <img src={SWORDLogo} alt="SWORD Health logo" height="46px" />

        <div>
          <Typography variant="subtitle2" fontStyle="bold">
            Frontend Developer
          </Typography>

          <Typography variant="body" fontStyle="italic" margin={{ top: '4px' }}>
            Challenge
          </Typography>
        </div>
      </FlexContainer>
    </header>
  );
};

export default Header;
