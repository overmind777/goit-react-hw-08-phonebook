import React from 'react';

import { useSelector } from 'react-redux';

import { selectIsLoggedIn, selectUser } from 'redux/auth/selectors';

import {
  LinkStyled,
  TextStyled,
  TitleStyled,
  WrapperStyled,
} from './HomePage.styled';

export default function HomePage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  return (
    <WrapperStyled>
      <TitleStyled>This is your personal Phonebook</TitleStyled>
      {!isLoggedIn ? (
        <TextStyled>
          To continue please <LinkStyled to="/login">Log In</LinkStyled> or{' '}
          <LinkStyled to="/register">Sign Up</LinkStyled>
        </TextStyled>
      ) : (
        <TextStyled>Hi, {user.name}!</TextStyled>
      )}
    </WrapperStyled>
  );
}
