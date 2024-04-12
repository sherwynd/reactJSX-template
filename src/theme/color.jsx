import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Mohave from '../fonts/Mohave-VariableFont_wght.ttf';

const theme = createTheme({
  // typography: {
  //   fontFamily: 'Mohave, sans-serif', // Add your font family here
  // },
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  // components: {
  //   MuiCssBaseline: {
  //     styleOverrides: 
  //     `
  //       @font-face {
  //         font-family: 'Mohave';
  //         src: url('../fonts/Mohave-VariableFont_wght.ttf') format('ttf');
  //         font-weight: 100 900;
  //       }
  //     `,
  //   },
  // },
});

export default theme;
