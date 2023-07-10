import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  html{
    -webkit-user-select: none;
    -webkit-touch-callout: none;
  }
  ul,nav{
    list-style:none;
  }
  a{
    text-decoration:none;
    cursor:pointer;
    color:inherit;
  }
  body{
    background-color:#FBFAF5;
    color:#04050A;
  }
`;