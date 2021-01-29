import { createGlobalStyle } from 'styled-components';
import { color } from './Styles';

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
}

html {
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    @media (max-width: 1700px) {
        font-size: 75%;
    }
    @media (max-width: 1300px) {
        
    }
}

p {
    color: ${color.text}
}

`;

export default GlobalStyle;
