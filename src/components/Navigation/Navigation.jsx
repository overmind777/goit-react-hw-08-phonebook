import React from 'react';

import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';

import { Flex, Link } from '@chakra-ui/react';

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Flex gap="20px" alignItems={'center'}>
      <Link
        as={NavLink}
        to="/"
        textDecoration={'none'}
        color={'white'}
        _focus={{ color: 'red' }}
        fontWeight={'700'}
      >
        Home
      </Link>
      {isLoggedIn && (
        <Link
          as={NavLink}
          to="/contacts"
          textDecoration={'none'}
          color={'white'}
          _focus={{ color: 'red' }}
          fontWeight={'700'}
        >
          Contacts
        </Link>
      )}
    </Flex>
  );
}
