import Notiflix from 'notiflix';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  Input,
  Button,
  // FormControl,
  // FormLabel,
  // FormErrorMessage,
  // FormHelperText,
} from '@chakra-ui/react';

import { addNewContact } from 'redux/operations';

import styled from 'styled-components';

const Form = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const contact = {
    name: name.trim(),
    phone: phone.trim(),
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (contact.name !== '' && contact.phone !== '') {
      dispatch(addNewContact(contact));
      setName('');
      setPhone('');
    } else {
      Notiflix.Notify.warning('Name and number cannot be empty.');
      setName('');
      setPhone('');
    }
  };

  return (
    <>
      <FormStyled onSubmit={handleSubmit}>
        <Input
          value={name}
          onChange={e => {
            setName(e.target.value);
          }}
          type="text"
          placeholder="Enter name"
          required
        />
        <Input
          value={phone}
          onChange={e => {
            setPhone(e.target.value);
          }}
          type="tel"
          placeholder="Enter phone"
          required
        />
        <Button>Add contact</Button>
      </FormStyled>
    </>
  );
};

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export default Form;
