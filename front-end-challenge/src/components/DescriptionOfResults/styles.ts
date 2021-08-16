import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  select {
    padding: 4px;
    border-radius: 4px;
    background-color: #eee;
    border-color: #ddd;
  }

  option {
    border: none;
    background-color: #eee;
    color: #25292e;
  }
`;

export { Container };
