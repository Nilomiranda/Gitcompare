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
    padding-left: 20px;
    font-size: 1rem;
    font-weight: bold;

    border: ${props => (props.error ? '2px solid #F00' : 0)};
    background-color: ${props => (props.error ? '#f7c0c0' : '#FFF')};
    color: ${props => (props.error ? '#ff6060' : 'initial')};
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

export const EmptyCard = styled.div`
  width: 400px;
  height: auto;
  background-color: #fff;
  margin-top: 50px;
  border-radius: 10px;
  padding: 30px;
  font-size: 1.5rem;
`;
