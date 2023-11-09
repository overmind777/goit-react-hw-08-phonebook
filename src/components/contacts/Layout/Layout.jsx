import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Form from '../Form/Form';
import Filter from '../Filter/Filter';

import { fetchAll } from 'redux/sliceContact';
import { selectFind } from 'redux/sliceFind';
import { deleteContact, fetchAllContacts } from 'redux/operations';

import styled from 'styled-components';

const getFilteredContacts = (contacts, filter) => {
  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter?.toLowerCase())
  );
};

const Layout = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(fetchAll);
  const filter = useSelector(selectFind);

  const filteredContacts = getFilteredContacts(items, filter);

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const handleClickDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <WrapperStyled>
      {isLoading && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}
      <h2>Phone Contacts</h2>
      <Form />
      <Filter />
      <ListStyled>
        {filteredContacts?.map(({ id, name, phone }) => {
          return (
            <ItemStyled key={id}>
              <p>
                {name}: {phone}
              </p>
              <button onClick={() => handleClickDelete(id)}>Delete</button>
            </ItemStyled>
          );
        })}
      </ListStyled>
    </WrapperStyled>
  );
};

const WrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 0;
  list-style: none;
`;

const ItemStyled = styled.li`
  display: flex;
  gap: 5px;
  align-items: center;
  & p {
    margin: 0;
  }
`;

export default Layout;
