import styled from 'styled-components';

const Container = styled.div`
  background-color: #eee;
  color: #222;
  margin: 20px 0;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  img {
    max-height: 150px;
    max-width: 150px;
    border-radius: 10px;
    margin: 0 20px;
  }

  .info {
    margin-left: 20px;
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
  }

  .name {
    text-align: left;
    font-size: 18px;
    text-decoration: none;
    font-weight: bold;
    color: #2b61d5;
    margin-bottom: 10px;
  }

  .name:hover {
    text-decoration: underline;
  }

  .description {
    font-size: 16px;
    color: #222;
    margin-bottom: 8px;
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: 14px;
  }

  .detailsNumbers {
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 8px;

    svg {
      margin: 4px;
    }
  }

  .detailsType {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
  }

  .detailsDates {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 16px 0 0;
  }

  .link {
    flex-direction: row;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #596069;
    margin-right: 10px;
  }

  .details p {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #596069;
    margin-right: 10px;
  }

  .stars:hover {
    color: #2b61d5;
  }

  @media screen and (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .info {
      text-align: justify;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .details {
      text-align: left;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin: 0;
      font-size: 20px;
    }

    .name {
      text-align: center;
    }

    p {
    }

    img {
      max-height: 120px;
      max-width: 120px;
      margin-bottom: 15px;
    }
  }
`;

export { Container };
