import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
`;

export const Header = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  background-color: #25292e;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

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

  @media screen and (max-width: 700px) {
    flex-direction: column;
    margin-bottom: 80px;

    .logo {
      margin-bottom: 15px;

      h1 {
        font-size: 36px;
      }

      svg {
        height: 40px;
        width: 40px;
      }
    }

    .searchBox {
      width: 100%;
      padding: 8px;
    }

    input {
      font-size: 22px;
    }
  }
`;

export const Content = styled.div`
  flex: 1;
  background-color: #fff;
  display: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: #222;
  width: 80%;
  height: 100%;
  padding: 80px 20px 0px 20px;
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

    option {
      border: none;
      background-color: #eee;
      color: #25292e;
    }
  }

  @media screen and (max-width: 700px) {
    margin-top: 70px;
    width: 100%;
  }
`;

export const RepoArea = styled.div`
  background-color: #eee;
  color: #222;
  margin: 15px 0;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

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
    text-align: left;
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

  @media screen and (max-width: 700px) {
    flex-direction: column;

    .details {
      text-align: left;
      display: flex;
      justify-content: left;
      align-items: flex-start;
      flex-direction: column;
      margin: 0;
      font-size: 22px;
    }

    p {
      font-size: 22px;
    }

    img {
      margin-bottom: 15px;
    }
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
  border: 1px solid #ddd;
  position: relative;
  bottom: 0;
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
  margin: 20px 0;

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

export const Initial = styled.div`
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

  h2 {
    margin: 15px 0;
  }

  svg {
    margin-right: 10px;
  }
`;
