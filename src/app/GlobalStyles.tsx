import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        list-style: none;
        margin: 0;

        border: none;

        padding: 0;

        box-sizing: border-box;
        scroll-behavior: smooth;

        background: transparent;

        font-family: Arial;
        font-size: 1em;
        font-weight: 400;
        text-decoration: none;
        color: white;
    }

    a,
    button,
    input[type="submit"] {
        cursor: pointer;
    }

    img {
        user-drag: none;
        -webkit-user-drag: none;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    }

    a,
    p,
    span {
        color: inherit;
        font-size: inherit;
        font-weight: inherit;
    }

    html,
    body {
        min-height: 100%;

        background-color: black;
    }
`;
