import React from 'react';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ContactForm } from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';

import styled from 'styled-components';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <WrapperStyled>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <WrapperStyled>
        <Filter />
        {!error && isLoading && <b>Loading...</b>}
      </WrapperStyled>
      {error ? <b>{error}</b> : <ContactList />}
    </WrapperStyled>
  );
}

const WrapperStyled = styled.div`
  padding: 0 20px;
`;

// .container div {
//   display: flex;
//   gap: 60px;
//   align-items: flex-end;
// }

// .container div b {
//   font-size: 20px;
// }
