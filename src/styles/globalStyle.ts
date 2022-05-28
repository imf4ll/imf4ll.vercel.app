import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap');

    * {
        font-family: 'JetBrains Mono', monospace;
    }

    *::-webkit-scrollbar {
        background-color: rgb(12, 12, 12);
        width: 10px;
    }
        
    *::-webkit-scrollbar-thumb {
        background: rgb(35, 35, 35);
    }
`;
