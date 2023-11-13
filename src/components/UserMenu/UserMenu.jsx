import { Button, Flex, Text } from '@chakra-ui/react';
import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <Flex alignItems={'center'} gap={'20px'}>
      <Text fontWeight={'bold'} color={'tomato'}>
        {user.email}
      </Text>

      <Button
        type="button"
        onClick={() => dispatch(logOut())}
        height={'25px'}
        borderRadius={'5px'}
        border={'inherit'}
        cursor={'pointer'}
        _hover={{ backgroundColor: 'gray' }}
      >
        Logout
      </Button>
    </Flex>
  );
}
