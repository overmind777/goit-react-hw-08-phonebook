import styled from 'styled-components';

export const WrapperStyled = styled.div`
  padding: 15px;
  width: 350px;
  border: 2px solid black;
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
`;

export const LabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-weight: 500;
  font-size: 17px;
  &.label:not(:last-child) {
    margin-bottom: 20px;
  }
`;
export const InputStyled = styled.input`
  padding: 2px;
  width: 170px;
`;

export const ButtonStyled = styled.button`
  margin-top: 20px;
  padding: 2px;
  width: 100px;
  cursor: pointer;
`;
