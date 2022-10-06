import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";

    }

    body{
        background: var(--header-dark)
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
    --header: #FFFFFF;
    --header-dark: #181A1B;
    --header-item: #BB83E6;
    --header-item-hover: #624973;
    --title: #3a3a3a;
    --title-dark: #c3beb6;
    --description: #666666;
    --description-dark: #a8a095;
    --border: #3B4042;
    --title-banner: #FFFFFF;
    --border-banner: rgba(0, 0, 0, 0.29);
    --post: #b2aca2;
    --title-post: #c8c3bc;
    --border-post: rgb(48, 52, 54);
    
    
}
`