import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import AppBar from './AppBar/AppBar';
import { Flex } from '@chakra-ui/react';

export default function SharedLayout() {
  return (
    <div>
      <AppBar />
      <Suspense fallback={null}>
        <Flex
          height={'100vh'}
          justifyContent={'center'}
          alignItems={'center'}
          position={'relative'}
        >
          <Outlet />
        </Flex>
      </Suspense>
    </div>
  );
}
