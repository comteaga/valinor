import styled from 'styled-components';

const Container = styled.div`
  background-color: #3b3e43;
  position: relative;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  z-index: 90;

  p {
    font-size: 16px;
    color: #eee;
    font-weight: 600;
  }

  a {
    text-decoration: none;
    color: #fff;
    margin-top: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a svg {
    margin-right: 4px;
  }

  a:hover {
    text-decoration: underline;
    color: #2b61d5;
  }
`;

export { Container };
