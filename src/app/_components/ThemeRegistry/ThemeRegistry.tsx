'use client';
import * as React from 'react';
import { ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import theme from './theme';

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  const muitheme = responsiveFontSizes(theme); 
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={muitheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}