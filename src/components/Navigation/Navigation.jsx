import React from 'react';

import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';

import styled from 'styled-components';

const Link = styled(NavLink)`
  &.active {
    color: #e72c45;
  }
`;

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <WrapperStyled>
      <LinkStyled to="/">Home</LinkStyled>
      {isLoggedIn && <LinkStyled to="/contacts">Contacts</LinkStyled>}
    </WrapperStyled>
  );
}

const WrapperStyled = styled.nav`
  display: flex;
  gap: 20px;
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 700;
`;
