import styled from 'styled-components';

const Container = styled.div`
  background-color: #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 5vh;
  margin-bottom: 5vh;
  padding: 50px;
  width: 80%;
  min-height: 60vh;

  h1 {
    font-size: 36px;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 800px) {
    padding: 20px;
    h1 {
      font-size: 28px;
      margin-bottom: 30px;
    }
  }
`;

export { Container };
