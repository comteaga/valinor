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
  padding: 200px;

  svg {
    margin-right: 10px;
    animation: ${animation} 1s linear infinite;
  }
`;

export { Container };
