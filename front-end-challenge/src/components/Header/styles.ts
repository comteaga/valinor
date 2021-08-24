import styled from 'styled-components';

const Container = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  background-color: #25292eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 30px;
  width: 100%;
  box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.3);
  z-index: 50;
  -webkit-backdrop-filter: blur(3px);
  -moz-backdrop-filter: blur(3px);
  -o-backdrop-filter: blur(3px);
  -ms-backdrop-filter: blur(3px);
  backdrop-filter: blur(3px);
  height: 60px;

  h1 {
    color: #eee;
    margin-left: 10px;
    font-size: 24px;
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .searchBox,
  .searchBoxToggleOn {
    padding: 0 0 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #0e1117ee;
    border: solid 1px #cccccc30;
    border-radius: 25px;
    width: 30%;
    height: 100%;
  }

  .searchInput,
  .searchInputToggleOn {
    background-color: #0e1117;
    color: #ddd;
    font-size: 16px;
    border-style: none;
    padding: 8px;
    width: 100%;
    height: 100%;
  }
  .newSearch,
  .newSearchToggleOn {
    background-color: #0e1117;
    height: 100%;
    border-style: none;
    border-radius: 0 25px 25px 0;
    width: 50px;
  }

  .newSearch:hover,
  .newSearchToggleOn:hover {
    svg {
      transition: all 0.2s;
      transform: scale(1.2);
    }
  }

  .toggleSearch,
  .toggleSearchOn {
    display: none;
  }

  .backButton,
  .backButtonToggleOn {
    display: none;
  }

  @media screen and (max-width: 800px) {
    .searchBox {
      width: fit-content;
      background-color: #00000000;
      border: none;
    }

    .toggleSearch {
      display: block;
      background-color: #00000000;
      border-style: none;
      border-radius: 25px;
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
      padding: 0;
      border-radius: 0;
      border: none;
    }

    .backButtonToggleOn {
      display: block;
      width: 10%;
      min-width: 50px;
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
      min-width: 50px;
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

  @media screen and (max-width: 400px) {
    padding: 12px;
  }
`;

export { Container };
