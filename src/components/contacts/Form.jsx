import Notiflix from 'notiflix';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

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
        <input
          value={name}
          onChange={e => {
            setName(e.target.value);
          }}
          type="text"
          placeholder="Enter name"
          required
        />
        <input
          value={phone}
          onChange={e => {
            setPhone(e.target.value);
          }}
          type="tel"
          placeholder="Enter phone"
          required
        />
        <ButtonStyled>Add contact</ButtonStyled>
      </FormStyled>
    </>
  );
};

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ButtonStyled = styled.button`
  width: 100px;
  height: 30px;
`;

export default Form;
