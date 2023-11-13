import React from 'react';
import { NavLink } from 'react-router-dom';

import { Flex, Link } from '@chakra-ui/react';

export const AuthNav = () => {
  return (
    <Flex gap={'20px'}>
      <Link
        as={NavLink}
        textDecoration={'none'}
        color={'white'}
        _focus={{ color: 'red' }}
        fontWeight={'700'}
        to="/login"
      >
        Log In
      </Link>
      <Link
        as={NavLink}
        textDecoration={'none'}
        color={'white'}
        _focus={{ color: 'red' }}
        fontWeight={'700'}
        to="/register"
      >
        Sign Up
      </Link>
    </Flex>
  );
};
