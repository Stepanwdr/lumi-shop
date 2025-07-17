'use client';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    /* colors */
    --color-primary: #3F8CFF;
    --color-accent: #FFA95C;
    --color-bg: #FFFFFF;
    --color-bg-soft: #F2F7FF;
    --color-text: #0D1B2A;
    --color-text-muted: #8A9BA8;
    --color-border: #D0D9E5;

    /* shadows */
    --shadow-s: 0 1px 2px 0 rgba(13,27,42,0.05);
    --shadow-m: 0 4px 12px 0 rgba(13,27,42,0.08);
    --shadow-l: 0 8px 32px 0 rgba(13,27,42,0.12);
    --shadow-glow: 0 0 18px 0 var(--color-primary);

    /* radius */
    --radius-sm: 8px;
    --radius-md: 12px;
    --radius-lg: 24px;
  }

  [data-theme='dark'] {
    --color-bg: #FFFFFF;
    --color-bg-soft: #1B263B;
    --color-text: #FFFFFF;
    --color-text-muted: #8A9BA8;
    --color-border: #334155;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    background: var(--color-bg);
    color: var(--color-text);
  }
  
  .container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    @media (min-width: 768px) {
       padding: 0 40px; 
    }  
  }
`;