import styled from 'styled-components';

const Container = styled.div`
  background-color: #eee;
  color: #222;
  margin: 20px 0;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.3);
  transition: transform 0.3s;

  :hover {
    transform: scale(1.01);
    transform: translateX(10px);
    box-shadow: 4px 4px 12px 0 rgba(0, 0, 0, 0.3);
  }

  img {
    height: 150px;
    width: 150px;
    border-radius: 10px;
    border: solid 1px #ddd;
  }

  .info {
    width: 100%;
    margin-left: 20px;
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
  }

  .name {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
    font-size: 20px;
    text-decoration: none;
    font-weight: bold;
    color: #2b61d5;
    margin-bottom: 12px;

    > svg {
      margin-right: 4px;
    }
  }

  .name:hover {
    text-decoration: underline;
  }

  .description {
    font-size: 16px;
    color: #222;
    margin-bottom: 10px;
    text-align: justify;
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: 14px;
    color: #596069;
  }

  .detailsNumbers {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 8px;

    > a {
      margin-right: 16px;
    }
  }

  .detailsType {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 8px;

    > p {
      margin-right: 16px;
    }
  }

  .detailsDates {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 8px;

    > p {
      margin-right: 16px;
    }
  }

  .link {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #596069;

    svg {
      vertical-align: text-top;
      margin-right: 4px;
    }
  }

  .link:hover {
    color: #2b61d5;
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      max-height: 120px;
      max-width: 120px;
      margin-bottom: 16px;
    }

    .info {
      text-align: justify;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: stretch;
      margin: 0;
      width: 100%;
    }

    .name {
      text-align: center;
    }
    .details {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: stretch;
      font-size: 16px;
    }

    .detailsNumbers {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 8px 4px;
      justify-items: left;

      > a {
        margin-right: 0;
      }
    }

    .detailsType {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 8px 4px;
      justify-items: left;

      > p {
        margin-right: 0;
      }
    }

    .detailsDates {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 8px 4px;
      justify-items: left;
      text-align: left;
      > p {
        margin-right: 0;
      }
    }
  }

  @media screen and (max-width: 440px) {
    .detailsNumbers,
    .detailsType,
    .detailsDates {
      display: block;

      > a {
        justify-content: left;
        margin-bottom: 8px;
      }
    }
  }
`;

export { Container };
