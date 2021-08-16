import styled from 'styled-components';

const Container = styled.div`
  background-color: #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: auto;
  padding: 50px;
  width: 80%;
  min-height: 70vh;

  h1 {
    font-size: 36px;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 700px) {
    padding: 20px;
    h1 {
      font-size: 28px;
      margin-bottom: 30px;
    }
  }
`;

export { Container };
