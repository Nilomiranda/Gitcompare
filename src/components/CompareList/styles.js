import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  background-color: #fff;
  border-radius: 10px;
  margin: 10px 20px;

  header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    height: 160px;

    img {
      width: 70px;
    }
  }

  small {
    color: #666;
  }

  ul {
    list-style-type: none;

    li {
      padding: 20px;

      small {
        margin-left: 10px;
        font-style: italic;
      }

      &:nth-child(odd) {
        background-color: rgba(0, 0, 0, 0.11);
      }
    }
  }
`;
