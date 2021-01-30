import { createGlobalStyle } from 'styled-components';
import { color } from './Styles';

const GlobalStyle = createGlobalStyle`
* {
    border: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    vertical-align: baseline;
    font-size: 100%;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
}

html {
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
}

p {
    color: ${color.text}
}

`;

export default GlobalStyle;
