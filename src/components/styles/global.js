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

    /* Fonts */
    font: 0.75rem 'Nunito', sans-serif;
    --title-1: bold 1.75rem inherit;
    --title-2: bold 1.5rem inherit;
    --title-3: bold 1.25rem inherit;
    --title-4: bold 0.75rem inherit;
    --headline: normal 1rem inherit;
  }

  * {
    margin: 0;
    outline: 0;
    border: 0;
    padding: 0;
    box-sizing: border-box;
    font: inherit;
  }
  
  button, select {
    cursor: pointer;
  }
`;

export default Global;
