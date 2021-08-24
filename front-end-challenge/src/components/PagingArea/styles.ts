import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 20px 0;
  width: 100%;

  #fistSection,
  #secondSection,
  #thirdSection {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .jumpPageButton,
  .pageButton,
  .pageButtonSelected {
    padding: 8px;
    min-height: 35px;
    min-width: 35px;
    border-radius: 4px;
    border: none;
    margin: 0 4px;
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
  .pageButtonSelected {
    background-color: #25292e;
    color: #eee;
  }

  .jumpPageButton:hover,
  .pageButton:hover {
    background-color: #25292e;
    color: #eee;
  }

  button:disabled,
  button[disabled] {
    cursor: not-allowed;
    background-color: #eee;
    color: #ccc;
  }

  @media screen and (max-width: 1200px) {
    .jumpPageButton {
      span {
        font-size: 0;
      }

      svg {
        margin: 0;
      }
    }
    .pageButton {
    }
  }

  @media screen and (max-width: 480px) {
    .jumpPageButton,
    .pageButton,
    .pageButtonSelected {
      border-radius: 0;
      margin: 0;
      min-height: 30px;
      min-width: 30px;
      padding: 4px;
    }

    #fistSection {
      button:first-child {
        border-radius: 4px 0 0 4px;
      }
    }
    #thirdSection {
      button:last-child {
        border-radius: 0 4px 4px 0;
      }
    }
  }
`;

export { Container };
