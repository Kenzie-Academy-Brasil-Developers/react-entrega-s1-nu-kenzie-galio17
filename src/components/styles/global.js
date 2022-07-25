import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  :root {
    /* Colors */
    /* Primary Palette */
    --color-primary-1: #FD377E;
    --color-primary-2: #E34981;
    --color-secondary: #03B898;

    /* Grey Scale Palette */
    --grey-1: #F8F9FA;
    --grey-2: #E9ECEF;
    --grey-3: #868E96;
    --grey-4: #212529;

    /* Others Palette */
    --shadow: #00000040;
    --shadow-gradient: #FD377E10;

    /* Fonts */
    --nunito: 'Nunito', sans-serif;
    --title-1: 700 1.75rem var(--nunito);
    --title-2: 700 1.5rem var(--nunito);
    --title-3: 700 1.25rem var(--nunito);
    --title-4: 700 0.75rem var(--nunito);
    --headline: 400 1rem var(--nunito);
    font-family: var(--nunito);
  }

  * {
    margin: 0;
    outline: 0;
    border: 0;
    padding: 0;
    box-sizing: border-box;
    font: inherit;
  }

  body {
    font-size: 0.75rem;
  }

  h1 {
    font: var(--title-2)
  }

  h2, h3 {
    font: var(--title-3)
  }

  strong {
    color: var(--color-primary-1);
  }
  
  button, select {
    cursor: pointer;
  }
`;

export default Global;
