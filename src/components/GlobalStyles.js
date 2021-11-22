import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
const GlobalStyles = createGlobalStyle`
    ${reset};
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    body{
        font-size: 16px;
        line-height:1.3;
        width: 100%;
        position: relative;
        font-family: 'Lato', sans-serif;

background-color:#fff ;
color: #555;
    }
    ol,ul,li{
        list-style: none;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    .container{
        width: 1280px;
        margin: 0 auto;
    }
    .btn{
        padding: 0.7rem 1.5rem;
        text-transform: uppercase;
        background-color: #2f3640;
        color: #fff;
        cursor: pointer;
        transition: 0.1s;
        &:hover{
            background-color: inherit;
            color: #2f3640;
            outline: 1px solid #2f3640;
        }
        &:disabled{
            &:hover{
                background-color: #2f3640;
        color: #fff;
        outline: 0;
        transition: 0;
        cursor: default;
            }
        }
    }

    button{
        border:0;
        display: inline-block;
    }
    input{
        border:0;
        &:focus{
            outline: 0;
        }
    }
`;
export default GlobalStyles;
