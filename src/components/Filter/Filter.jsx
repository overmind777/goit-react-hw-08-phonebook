import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

import styled from 'styled-components';

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = e => {
    dispatch(updateFilter(e.currentTarget.value));
  };

  return (
    <div>
      <LabelStyled>
        Find contacts by name
        <InputStyled
          type="text"
          name="filter"
          value={filter}
          onChange={handleFilterChange}
        />
      </LabelStyled>
    </div>
  );
}

export default Filter;

const LabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  gap: 7px;
  font-weight: 500;
  font-size: 17px;
`;

const InputStyled = styled.input`
  padding: 2px;
  width: 170px;
`;
