import React from 'react';
import styled from 'styled-components';

import Boundary from './Boundary';
import Typography from '../Typography';
import SWORDLogo from '../../assets/images/SWORD_Health_logo.svg';

const FixedHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`;

const Header: React.FC = () => {
  return (
    <FixedHeader>
      <Boundary>
        <Flex>
          <img src={SWORDLogo} alt="SWORD Health logo" height="46px" />

          <div>
            <Typography variant="subtitle2" fontStyle="bold">
              Frontend Developer
            </Typography>

            <Typography
              variant="body"
              fontStyle="italic"
              margin={{ top: '4px' }}
            >
              Challenge
            </Typography>
          </div>
        </Flex>
      </Boundary>
    </FixedHeader>
  );
};

export default Header;
