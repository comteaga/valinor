import styled from 'styled-components';

const Container = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1;
  background-color: #fff;
  display: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: #222;
  width: 70%;
  min-width: 800px;
  height: 100%;
  padding: 90px 20px 0px 20px;
  margin: auto;

  h1 {
    font-size: 18px;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    min-width: unset;
  }
`;

export { Container, Content };
