import styled from "styled-components";

const Container = styled.div`
  header {
    box-shadow: 5px 0px 10px var(--shadow);
    padding: 10px;
  }

  .headerContainer {
    margin: 0 auto;
    width: 90%;
    max-width: 988px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  main {
    margin: 39px auto;
    max-width: 988px;
    height: calc(100vh - 150px);
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  main > section {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  form {
    margin: 0 auto;
    border: 1px solid var(--grey-2);
    padding: 10px;
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  input {
    background-color: var(--grey-1);
    border-radius: 8px;
    padding: 10px 16px;
    font: var(--headline);
  }

  .valueContainer {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }

  .valueContainer > div {
    width: calc(50% - 20px);
  }

  .valueContainer input {
    width: 100%;
  }

  .totalMoneyContainer {
    margin: 0 auto;
    border: 1px solid var(--grey-2);
    padding: 10px;
    width: 90%;
  }

  .totalMoney {
    float: right;
  }

  .filterContainer {
    margin: 0 auto;
    padding: 10px;
    width: 90%;
    display: flex;
    flex-direction: column;
  }

  .filterContainer > div {
    display: flex;
    justify-content: space-between;
    gap: 16px;
  }

  ul {
    margin: 0 auto;
    padding: 10px;
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  li {
    background-color: var(--grey-1);
    border-radius: 4px;
    border-left: 4px solid;
    padding: 10px 15px;
    height: 5.438rem;
    display: flex;
    justify-content: space-between;
  }

  .entrada {
    border-color: var(--color-secondary);
  }

  .despesa {
    border-color: var(--grey-2);
  }

  .transaction__details {
    max-width: calc(50% - 30px);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
  }

  .transaction__important {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  li h3 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .noCard {
    margin: 0 auto;
    padding: 10px;
    width: 90%;
  }

  .noCard img {
    width: 100%;
  }

  @media screen and (min-width: 769px) {
    main {
      display: flex;
      flex-direction: row;
      gap: 0;
      padding: 40px;
    }

    main > section {
      width: 50%;
    }

    form,
    .totalMoneyContainer {
      max-width: 388px;
    }

    form,
    .totalMoneyContainer,
    .filterContainer,
    .noCard,
    ul {
      margin: 0;
      width: 100%;
    }
  }

  @media screen and (min-width: 1024px) {
    main {
      padding: 0;
    }

    .filterContainer {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .filterContainer button {
      height: max-content;
    }
  }
`;

export default Container;
