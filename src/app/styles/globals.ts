'use client';
import { createGlobalStyle } from 'styled-components';
import  "./vars.css"
import "./reset.css"

export const GlobalStyles = createGlobalStyle`

  
  .container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    @media (min-width: 768px) {
       padding: 0 40px; 
    }  
  }
  
  .header {
      display: flex;
      justify-content: space-between;
      margin: 1rem;
      gap: 1rem;
      align-items: center;
      .log-in-icon {
        cursor: pointer;    
      }
  }
`;