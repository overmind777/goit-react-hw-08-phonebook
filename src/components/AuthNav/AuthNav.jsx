import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

export const AuthNav = () => {
  return (
    <WrapperStyled>
      <LinkStyled to="/login">Log In</LinkStyled>
      <LinkStyled to="/register">Sign Up</LinkStyled>
    </WrapperStyled>
  );
};

const WrapperStyled = styled.div`
  display: flex;
  gap: 20px;
`;

const LinkStyled = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-weight: 700;
  &.active {
    color: #e72c45;
  }
`;
