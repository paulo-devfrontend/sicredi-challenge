import { createGlobalStyle } from 'styled-components';

import { easing } from './animation';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  strong, b {
    font-weight: 500;
  }

  em, i {
    font-weight: 300;
  }

  body {
    background-color: ${props => props.theme.background};
    transition: background-color 150ms ${easing.standard};
  }
`;
