import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: fit-content;
  position: relative;

  .selectButton {
    background-color: #eee;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6px;
    border-radius: 6px;
    border: 1px solid #ccc;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
  }

  .arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 8px;
    padding-left: 6px;
    border-left: 1px solid #ccc;
  }

  .listOfOptionsOff {
    z-index: 40;
    position: absolute;
    min-width: fit-content;
    top: 110%;
    right: 0%;
    background-color: #fff;
    margin-top: 2px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.3);
    white-space: nowrap;
    border: 1px solid #ccc;

    visibility: hidden;
  }

  .listOfOptionsOn {
    z-index: 40;
    position: absolute;
    min-width: fit-content;
    top: 110%;
    right: 0%;
    background-color: #fff;
    margin-top: 2px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.3);
    white-space: nowrap;
    border: 1px solid #ccc;
    visibility: visible;
  }

  .option {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    width: 100%;
    border: none;
    padding: 6px;
    border-radius: 4px;
    font-size: 14px;
  }

  .option:hover {
    background-color: #25292e;
    color: #eee;
    -webkit-transition: background-color 0.2s ease-in;
    -ms-transition: background-color 0.2s ease-in;
    transition: background-color 0.2s ease-in;
  }
`;

export { Container };
