import styled from "styled-components";

export const ImageContainer = styled.img`
  margin-left: -3rem;
  width: 50%;
  height: 50%;
`;
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const FormSubmit = styled.button`
  display: flex;
  justify-content: center;
  margin-top: 0.4rem;
  border-radius: 5px;
  padding: 0.5rem;
  width: 100%;
  border: 1px solid #00bfa5;
  background-color: #00bfa5;
  color: #254956;
  cursor: pointer;
`;
export const FormButton = styled.div`
  display: flex;
  padding: 0.5rem 1rem;
  border: 1px solid gray;
  border-radius: 5px;
  margin: 0.5rem;
  align-items: center;
  justify-content: center;
  :hover {
    background-color: #00bfa5;
  }
`;
