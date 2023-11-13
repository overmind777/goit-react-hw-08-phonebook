import { Box } from '@chakra-ui/react';
import ContactsPage from 'components/ContactsPage/ContactsPage';
import React from 'react';

export default function Contacts() {
  return (
    <Box
      position={'absolute'}
      top={'10px'}
      padding={'20px'}
      borderRadius={'10px'}
      backgroundColor={'white'}
    >
      <ContactsPage />
    </Box>
  );
}
