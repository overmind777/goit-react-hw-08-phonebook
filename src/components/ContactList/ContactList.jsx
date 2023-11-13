import React from 'react';

import ContactItem from './ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';

import styled from 'styled-components';

function ContactList() {
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);

  const filteredContacts = () => {
    const normalizedFilter = filter.toLocaleLowerCase();

    return contacts.filter(e =>
      e.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div>
      <ListStyled>
        {filteredContacts().map(({ id, name, number }) => {
          return (
            <ContactItem key={id} contactId={id} name={name} number={number} />
          );
        })}
      </ListStyled>
    </div>
  );
}

export default ContactList;

const ListStyled = styled.ul`
  padding-left: 15px;
  list-style: none;
`;
