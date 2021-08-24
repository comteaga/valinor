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
  padding: 14px;
  width: 100%;
  min-height: 60vh;

  h1 {
    font-size: min(36px, 7vw);
    margin-bottom: 25px;
  }

  svg {
    width: min(180px, 40vw);
  }
`;

export { Container };
