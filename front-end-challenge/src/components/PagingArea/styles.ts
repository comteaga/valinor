import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;

  button {
    padding: 10px 15px;
    border-radius: 4px;
    border: none;
    border-radius: 4px;
    margin: 0 5px;
    font-weight: bold;
    transition: all 0.4s;
    background-color: #ddd;
    color: #25292e;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 700px) {
      font-size: 22px;
      span {
        font-size: 0;
      }
    }

    svg {
      margin: 0 3px;
    }
  }

  button:hover {
    background-color: #25292e;
    color: #eee;
  }

  button:disabled,
  button[disabled] {
    background-color: #eee;
    color: #ccc;
  }

  .pageButtonSelected {
    background-color: #25292e;
    color: #eee;
    padding: 10px 15px;
    font-weight: bold;
    border-radius: 4px;
  }
`;

export { Container };
