import styled from 'styled-components';

const Container = styled.div`
  padding: 54px 5%;

  @media (min-width: 1200px) {
    padding-left: calc((100% - 992px) / 2);
    padding-right: calc((100% - 992px) / 2);
  }

  @media (min-width: 1400px) {
    padding-left: calc((100% - 1200px) / 2);
    padding-right: calc((100% - 1200px) / 2);
  }
`;

export default Container;
