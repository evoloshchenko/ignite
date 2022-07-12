import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: #4e4d4d;
        }
        &::-webkit-scrollbar-track {
        background: white;
        }
        caret-color: transparent;
    }
    body{
    font-family: "Montserrat", sans-serif;
    width: 100%;
    }
    h2{
        font-size: 3rem;
        font-family: "Abril Fatface", cursive;
        font-weight: lighter;
        color: #010161;
    }
    h3{
        font-size: 1.3rem;
        color: #010161;
        padding: 1.5rem 0rem;
    }
    p{
        font-size: 1.2rem;
        line-height: 200%;
        padding-bottom: 0.5rem;
    }
    a{
        text-decoration: none;
    }
    ul{
        font-size: 1.2rem;
        /* text-align: center; */
        list-style: inside;
        
        list-style-type: square;
    }
`;

export default GlobalStyles;
