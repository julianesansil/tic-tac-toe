import styled from 'styled-components';
import Boundary from '../../common/Boundary';

export const Container = styled(Boundary)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const Column1 = styled.div`
  display: flex;
  flex: 0.5;
  align-items: center;
  gap: 20px;
`;

export const Column2 = styled.div`
  flex: 0.5;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  height: 120px;
  width: 120px;
`;
