import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    }

    html{
        min-height: 100%;
        background: var(--primary);

    }

    *, button, input{
        border:0;
        background: none;
        color:black;
    }
    ul{
        list-style: none;
    }
    :root {
    --header: #181A1B;
    --HeaderItemColor: #BB83E6;
    --HeaderItemColorHover: #624973;
}
`