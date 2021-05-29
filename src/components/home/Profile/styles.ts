import styled from 'styled-components';
import Container from 'components/common/Container';

export const FlexContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const Column1 = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  gap: 20px;
`;

export const Column2 = styled.div`
  flex: 1;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  height: 120px;
  width: 120px;
`;
