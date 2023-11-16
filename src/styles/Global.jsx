import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
   p {
      color: blue;
   }
   b{
     color: green;
   }   

   * {
      font-family: Verdana, Geneva, Tahoma, sans-serif;
   }
`

export default Global;