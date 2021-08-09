import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
`;

export const Header = styled.header`
  background-color: #25292e;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  width: 100%;

  h1 {
    color: #eee;
    margin-left: 10px;
    font-size: 18px;
  }

  .logo {
    background-color: #25292e;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }

  input {
    background-color: #0e1117;
    color: #ddd;
    border-style: none;
    border-radius: 4px;
    width: 90%;
    padding: 5px;
  }

  button {
    background-color: #0e1117;
    padding: 5px;
    border-style: none;
    border-radius: 4px;
    width: 10%;
  }

  .searchBox {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #0e1117;
    font-size: 16px;
    border-style: none;
    border-radius: 4px;

    width: 400px;
  }
`;

export const Content = styled.div`
  flex: 1;
  background-color: #fff;
  display: column;
  align-items: center;
  justify-content: center;
  color: #222;
  width: 80%;
  padding: 20px;
  margin: auto;

  h1 {
    font-size: 18px;
  }

  .results {
    display: flex;
    align-items: center;
    justify-content: space-between;

    select {
      padding: 4px;
      border-radius: 4px;
      background-color: #eee;
      border-color: #ddd;
    }
  }
`;

export const RepoArea = styled.div`
  background-color: #eee;
  color: #222;
  margin: 10px 0;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  img {
    max-height: 100px;
    max-width: 100px;
    border-radius: 10px;
  }

  p {
    font-size: 14px;
    color: #222;
    margin: 10px 0;
  }

  .info {
    margin-left: 20px;
  }

  .name {
    font-size: 20px;
    text-decoration: none;
    font-weight: bold;
    color: #2b61d5;
  }

  .name:hover {
    text-decoration: underline;
  }

  /* implementar  responsividade */

  .details {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .stars {
    text-decoration: none;
    color: #596069;
    margin-right: 10px;
  }
  .details p {
    color: #596069;
    margin-right: 10px;
  }

  .stars:hover {
    color: #2b61d5;
  }
`;

const animation = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
    
  }
`;

export const Loading = styled.div`
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

export const NoResults = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export const Footer = styled.footer`
  border: 1px solid #eee;
  color: #596069;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
`;

export const PagingArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  button {
    padding: 10px;
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
