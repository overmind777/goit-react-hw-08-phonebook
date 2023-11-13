import React from 'react';
import { useSelector } from 'react-redux';

import { AuthNav } from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { selectIsLoggedIn } from 'redux/auth/selectors';

import { Flex, Spacer } from '@chakra-ui/react';

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Flex
      padding="16px 20px"
      borderBottom="1px solid #2a363b"
      background={'linear-gradient(0deg, #fcd700 0%, #4573fc 100%)'}
    >
      <Navigation />
      <Spacer />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Flex>
  );
}
