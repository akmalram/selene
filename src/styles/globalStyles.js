import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    @import url(https://fonts.googleapis.com/css?family=Raleway:300,regular,700);
    body {
        padding: 0;
        margin: 0;
        font-family: Raleway, Arial, sans-serif;
        font-size: 1.6rem;
    }
    html {
        font-size: 10px;
    }
    *, *::before, *::after {
        box-sizing: border-box;
    }
    img {
        max-width: 100%;
        height: auto;
    }
`;