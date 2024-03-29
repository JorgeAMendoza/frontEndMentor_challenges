import { createGlobalStyle } from 'styled-components'
import colorStyles from './utils/colors'

const GlobalStyles = createGlobalStyle`
html {
    font-size: 62.5%;
    box-sizing: border-box;
  }
  *,
  *::after,
  *::before {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
    line-height: 1.4;
  }
  body{
    font-family: 'Manrope', sans-serif;
    font-size: 1.6rem;
    min-height: 100vh;
    background-color: ${colorStyles.background};
    color: ${colorStyles.adviceText};
    display:flex;
    align-items: center;
    justify-content: center;

    #root{
      width:100%;
    }
  } 
  img,svg {
    max-width: 100%;
    display: block;
  }
  input {
    font-family: inherit;
    border: none;
  }
  ul{
    list-style: none;
  }

  button,a{
    text-decoration:none;
    border:none;
    cursor: pointer;
  }

  p,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
    hyphens: auto;
}`

export default GlobalStyles
