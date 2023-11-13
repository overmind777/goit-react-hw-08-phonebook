import React from 'react';

import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

import {
  ButtonStyled,
  FormStyled,
  InputStyled,
  LabelStyled,
} from './LoginForm.styled';
import { Box } from '@chakra-ui/react';

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box backgroundColor={'white'} borderRadius={'10px'}>
      <FormStyled onSubmit={handleSubmit} autoComplete="off">
        <LabelStyled>
          Email
          <InputStyled type="email" name="email" autoFocus />
        </LabelStyled>
        <LabelStyled>
          Password
          <InputStyled type="password" name="password" />
        </LabelStyled>
        <ButtonStyled type="submit">Log In</ButtonStyled>
      </FormStyled>
    </Box>
  );
}
