import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
    
  }
`;

const Container = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  height: 80vh;

  h1 {
    font-size: 22px;
  }

  svg {
    margin-right: 10px;
    animation: ${animation} 1s linear infinite;
  }
`;

export { Container };
