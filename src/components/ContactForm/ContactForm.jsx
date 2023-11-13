import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

import {
  ButtonStyled,
  FormStyled,
  InputStyled,
  LabelStyled,
  WrapperStyled,
} from './ContactForm.styled';

export function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;

      case 'number':
        setNumber(e.currentTarget.value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    createContact(name, number);
    setName('');
    setNumber('');
  };

  const createContact = (name, number) => {
    if (!contacts.find(el => el.name === name)) {
      const newContact = {
        name,
        number,
      };
      dispatch(addContact(newContact));
    } else {
      alert(`${name} is already in contacts.`);
    }
  };

  return (
    <WrapperStyled>
      <FormStyled onSubmit={handleSubmit}>
        <LabelStyled>
          Name
          <InputStyled
            type="text"
            name="name"
            required
            value={name}
            onChange={handleInputChange}
          />
        </LabelStyled>
        <LabelStyled>
          Number
          <InputStyled
            type="tel"
            name="number"
            required
            value={number}
            onChange={handleInputChange}
          />
        </LabelStyled>
        <ButtonStyled type="submit">Add contact</ButtonStyled>
      </FormStyled>
    </WrapperStyled>
  );
}
