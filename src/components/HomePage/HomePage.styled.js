import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const WrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 50px;

  background: radial-gradient(
    rgba(180, 176, 58, 0.33) 0%,
    rgba(242, 253, 29, 1) 50%,
    rgba(252, 176, 69, 0.33) 100%
  );
`;

export const TitleStyled = styled.h1`
  font-weight: 700;
  font-size: 48px;
  text-align: center;
  color: black;
`;

export const TextStyled = styled.p`
  font-weight: 500;
  font-size: 30px;
  color: black;
`;

export const LinkStyled = styled(Link)`
  color: red;
`;
