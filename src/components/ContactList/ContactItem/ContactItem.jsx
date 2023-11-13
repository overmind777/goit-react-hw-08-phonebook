import React from 'react';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import { deleteContact } from 'redux/operations';

import styled from 'styled-components';

function ContactItem({ name, number, contactId }) {
  const dispatch = useDispatch();

  return (
    <>
      <ItemStyled>
        <p>
          {name}: {number}
        </p>
        <ButtonStyled
          type="button"
          onClick={() => dispatch(deleteContact(contactId))}
        >
          delete
        </ButtonStyled>
      </ItemStyled>
    </>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  contactId: PropTypes.string.isRequired,
};

export default ContactItem;

const ItemStyled = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  font-size: 17px;
`;

const ButtonStyled = styled.button`
  font-size: 12px;
  cursor: pointer;
`;
