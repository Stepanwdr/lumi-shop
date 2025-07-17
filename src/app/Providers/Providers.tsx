'use client';
import { ThemeProvider } from 'styled-components';

const theme = {}; // styled-components не требует объект, т.к. токены в CSS-переменных

export function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}