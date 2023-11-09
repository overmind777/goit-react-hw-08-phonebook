import { ChakraProvider } from '@chakra-ui/react';

import Layout from './contacts/Layout';

import styled from 'styled-components';

export const App = () => {
  return (
    <ChakraProvider>
      <WrapperStyled>
        <Layout />
      </WrapperStyled>
    </ChakraProvider>
  );
};

const WrapperStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
