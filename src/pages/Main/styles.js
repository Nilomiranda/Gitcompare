import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  display: flex;
  justify-content: center;

  input {
    width: 70%;
    border-radius: 3px;
    border: none;
    padding-left: 20px;
    font-size: 1rem;
    font-weight: bold;
  }

  button {
    margin-left: 20px;
    background-color: #c7ea46;
    height: 55px;
    width: 55px;
    border-radius: 3px;
    border: none;
    color: #fff;
    font-family: 'Helvetica';
    font-weight: bolder;
    font-size: 1.2rem;

    &:hover {
      cursor: pointer;
      background-color: #29ab87;
    }
  }
`;
