import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';

import styled from 'styled-components';

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <WrapperStyled>
      <b>{user.email}</b>

      <ButtonStyled type="button" onClick={() => dispatch(logOut())}>
        Logout
      </ButtonStyled>
    </WrapperStyled>
  );
}

const WrapperStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  & p {
    margin: 0;
  }
`;

const ButtonStyled = styled.button`
  height: 25px;
`;
