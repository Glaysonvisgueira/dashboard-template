import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle` 
  
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing:border-box;
}
html, body, :root {
    //font-family: 'Open Sans', sans-serif;    
    //font-family: 'Fira Sans', sans-serif;
    font-family: 'Lato', sans-serif;
    //font-family: 'Nunito', sans-serif;
    min-height: 100%;    
    scroll-behavior: smooth;
    overflow-x: hidden;
  }  
 
`;
export default GlobalStyle;
