import { Arvo, Inter } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import {  green, cyan, blueGrey } from '@mui/material/colors';

// Override Mui's theme typings to include the new theme property
declare module '@mui/material/styles/createTheme' {
  interface Theme {
    status: {
      danger: React.CSSProperties['color'],
    }
  }
  interface ThemeOptions {
    status?: {
      danger?: React.CSSProperties['color']
    }
  }
}

export const primary = "#00bfbf";
export const black = "#111111";
export const white = "#fafafa";

const arvo = Arvo({ subsets: ['latin'], weight: ['400', '700'], display: 'swap' });
const inter = Inter({ subsets: ['latin'], weight: ['400'], display: 'swap' });

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: green [100]
     },
      secondary: {
            main: cyan [200]
          },
      background: {
            default: '#01142C',
            paper: '#032146',
          },
  },          
  typography: {
    fontFamily: inter.style.fontFamily, // Default for body
    h1: {
      fontFamily: arvo.style.fontFamily,
      fontWeight: 700,
    },
    h2: {
      fontFamily: arvo.style.fontFamily,
      fontWeight: 700,
    },
    h3: {
      fontFamily: arvo.style.fontFamily,
      fontWeight: 700,
    },
    h4: {
      fontFamily: arvo.style.fontFamily,
      fontWeight: 700,
    },
    h5: {
      fontFamily: arvo.style.fontFamily,
      fontWeight: 700,
    },
    h6: {
      fontFamily: arvo.style.fontFamily,
      fontWeight: 700,
    },                    
    button: {
      fontFamily: arvo.style.fontFamily,
      fontWeight: 700,
    },
    body1: {
      fontFamily: inter.style.fontFamily,
    }
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
  },
});

export default theme;