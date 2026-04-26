import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import type {Theme} from "./theme.ts";

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}

export const GlobalStyle = createGlobalStyle`
    ${reset}
    
    @font-face {
        font-family: "D2Coding";
        src: url("/assets/fonts/D2Coding-Ver1.3.2.ttf") format("truetype");
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: "D2Coding";
        src: url("/assets/fonts/D2CodingBold-Ver1.3.2.ttf") format("truetype");
        font-weight: bold;
        font-style: normal;
    }

    html, body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
    }
    
    body {
        background-color: ${props => props.theme.color.backgroundContainer};
        color: ${props => props.theme.color.onBackgroundContainer};
        
        font-family: "D2Coding", monospace;
        font-size: ${props => props.theme.font.medium};
        line-height: ${props => props.theme.font.lineHeight};
        
        #root {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
        }
    }
    
    a {
        color: ${props => props.theme.color.url};
        text-decoration: none;
        
        &:visited { color: ${props => props.theme.color.urlVisited}; }
        &:hover { text-decoration: underline; }
    }
    
    button {
        padding: ${props => props.theme.padding.innerSmall};
        
        background-color: ${props => props.theme.color.primary};
        color: ${props => props.theme.color.onPrimary};
        border: none;
        
        font-family: inherit;
        font-size: ${props => props.theme.font.medium};
        
        cursor: pointer;

        &:hover {filter: brightness(1.1); }
        &:active { filter: brightness(0.9); }
    }
`;
