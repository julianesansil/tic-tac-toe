import styled from 'styled-components';

const Container = styled.div`
  padding-left: 5%;
  padding-right: 5%;

  @media (min-width: 1066px) {
    padding-left: calc((100% - 960px) / 2);
    padding-right: calc((100% - 960px) / 2);
  }

  @media (min-width: 1440px) {
    padding-left: calc((100% - 1200px) / 2);
    padding-right: calc((100% - 1200px) / 2);
  }
`;

export default Container;
