import Layout from './contacts/Layout';

import styled from 'styled-components';

export const App = () => {
  return (
    <WrapperStyled>
      <Layout />
    </WrapperStyled>
  );
};

const WrapperStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
