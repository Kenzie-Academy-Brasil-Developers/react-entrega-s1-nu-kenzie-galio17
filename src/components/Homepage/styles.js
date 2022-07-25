import styled from "styled-components";

const Container = styled.div`
  main {
    background-color: var(--grey-4);
    color: var(--grey-1);
    padding: 20px;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
  }

  .lobby {
    max-height: 70vh;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .ilustration {
    display: none;
  }

  p {
    max-width: 340px;
    font: var(--title-1);
  }

  span {
    font: var(--headline);
  }

  button {
    max-width: 240px;
  }

  @media screen and (min-width: 768px) {
    .ilustration {
      width: 390px;
      height: 390px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    div {
      background-color: var(--shadow-gradient);
      border-radius: 50%;
      width: 80%;
      max-width: 590px;
      height: 80%;
      max-height: 590px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .ilustration > div {
      width: 100%;
      height: 100%;
    }

    img {
      max-width: 40%;
      position: absolute;
    }
  }

  @media screen and (min-width: 1025px) {
    .ilustration {
      width: 500px;
      height: 500px;
    }
  }
`;

export default Container;
