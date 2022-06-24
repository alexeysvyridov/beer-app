import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  border: 1px solid  rgb(19, 15, 53);
  border-radius: 4px;
  padding: 16px;
  gap: 10px;
  width 600px;
`;
export const IconWrapper = styled.div`
  width: 25px;
  height: 25px;
`;
export const Input = styled.input`
  all: unset;
  display: flex;
  height: 50px;
  width: 480px;
  border-radius: 8px;
`;

export const ButtonSubmit = styled.button`
  height: 35px;
  width: 150px;
  margin: 8px;
  border-radius: 4px;
  cursor: pointer;
  :hover {
    color: rgb(236, 9, 130);
  }
`;



