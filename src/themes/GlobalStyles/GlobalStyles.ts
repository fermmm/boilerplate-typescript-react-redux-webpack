import { createGlobalStyle, GlobalStyleComponent } from 'styled-components';
// @ts-ignore
import './fonts-loading.scss';

export const GlobalStyles: GlobalStyleComponent<{}, {}> = createGlobalStyle`
   html, body {
      margin: 0;
      padding: 0;
      overflow-x: hidden;
      background-color: ${props => props.theme.colors.background1};
      font-family: ${props => props.theme.fonts.font1};
   }
   
   a:hover, a:visited, a:link, a:active {
      text-decoration: none;   /* Removes underline in link texts */ 
      border:          none;   /* Removes border in linked items */
      outline:         none;   /* Removes points border in images */
   }
   
   *:focus {
      outline: none;           /* Removes the selection outline from inputs and buttons */
   }
   
   *, :after, :before {
      box-sizing: border-box;  /* Do not include border and margin in the sizes numbers */
   }

   ::-webkit-scrollbar {
      width: 7px;
      margin: 2px;
   }

   ::-webkit-scrollbar-track {
      background: ${props => props.theme.colors.scrollbar};
      border-radius: ${props => props.theme.borders.borderRadius1};
   }

   ::-webkit-scrollbar-thumb {
      background: ${props => props.theme.colors.scrollbarThumb};
      border-radius: ${props => props.theme.borders.borderRadius1};
   }
`;
