import { Arvo } from 'next/font/google';
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
    h1: {
      fontFamily: "Arvo",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "Arvo",
      fontWeight: 700,
    },
    h3: {
      fontFamily: "Arvo",
      fontWeight: 700,
    },
    h4: {
      fontFamily: "Arvo",
      fontWeight: 700,
    },
    h5: {
      fontFamily: "Arvo",
      fontWeight: 700,
    },
    h6: {
      fontFamily: "Arvo",
      fontWeight: 700,
    },                    
    button: {
      fontFamily: "Arvo",
      fontWeight: 700,
    },
    body1: {
      fontFamily: "Inter",
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