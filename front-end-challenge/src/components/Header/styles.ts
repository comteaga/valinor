import styled from 'styled-components';

const Container = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  background-color: #25292e;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 30px;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  h1 {
    color: #eee;
    margin-left: 10px;
    font-size: 20px;
  }

  .logo {
    background-color: #25292e;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .searchBox,
  .searchBoxToggleOn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #0e1117;
    border-style: none;
    border-radius: 10px;
    width: 25%;
  }

  .searchInput,
  .searchInputToggleOn {
    background-color: #0e1117;
    color: #ddd;
    font-size: 16px;
    border-style: none;
    border-radius: 10px;
    width: 90%;
    padding: 8px;
  }
  .newSearch,
  .newSearchToggleOn {
    background-color: #0e1117;
    padding: 4px;
    border-style: none;
    border-radius: 10px;
    width: 10%;
  }

  .toggleSearch,
  .toggleSearchOn {
    display: none;
  }

  .backButton,
  .backButtonToggleOn {
    display: none;
  }

  @media screen and (max-width: 700px) {
    .logo {
      h1 {
        font-size: 36px;
      }

      svg {
        height: 40px;
        width: 40px;
      }
    }

    .searchBox {
      width: fit-content;
    }

    .toggleSearch {
      display: block;
      background-color: #25292e;
      padding: 12px;
      border-style: none;
      border-radius: 10px;
    }

    .toggleSearch:hover {
      background-color: #0e1117;
    }

    .searchInput {
      display: none;
    }

    .newSearch {
      display: none;
    }

    .backButton {
      display: none;
    }

    .toggleSearchOn {
      display: none;
    }

    .searchBoxToggleOn {
      background-color: #25292e;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      position: absolute;
      z-index: 99;
      top: 0;
      left: 0;
      height: 100vh;
      width: 100vw;
    }

    .backButtonToggleOn {
      display: block;
      width: 10%;
      max-width: 50px;
      height: 15%;
      border: none;
      background-color: #0e1117;

      svg {
        width: 90%;
        height: 90%;
        max-width: 40px;
        max-height: 40px;
      }
    }

    .searchInputToggleOn {
      font-size: 28px;
      display: block;
      width: 80%;
      height: 15%;
      border: none;
      background-color: #0e1117;
      color: #fff;
      align-items: center;
      padding: 0 8px;
      border-radius: 0;
    }

    .newSearchToggleOn {
      display: block;
      width: 10%;
      max-width: 50px;
      height: 15%;
      border: none;
      background-color: #0e1117;
      border-radius: 0;

      svg {
        width: 90%;
        height: 90%;
        max-width: 40px;
        max-height: 40px;
      }
    }
  }
`;

export { Container };
