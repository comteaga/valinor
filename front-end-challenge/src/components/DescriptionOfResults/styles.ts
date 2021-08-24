import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #444;

  h1 {
    font-size: 20px;
  }

  .selectArea {
    display: flex;
    align-items: center;

    .select:last-child {
      margin-left: 8px;
    }
  }

  @media screen and (max-width: 1300px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h1 {
      text-align: justify;
      font-size: 16px;
      margin-bottom: 12px;
    }

    .selectArea {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      .select:last-child {
        margin-left: 0;
        margin-top: 6px;
      }
    }
  }
`;

export { Container };
