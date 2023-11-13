import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const WrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 50px);
  align-items: center;
  justify-content: center;
`;

export const TitleStyled = styled.h1`
  font-weight: 700;
  font-size: 48px;
  text-align: center;
`;

export const TextStyled = styled.p`
  font-weight: 500;
  font-size: 30px;
`;

export const LinkStyled = styled(Link)`
  color: red;
`;
