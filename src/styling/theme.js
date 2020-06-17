import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2B678C',
    },
    secondary: {
      main: '#D95032',
    },
  },
  typography: {
    fontFamily: ['Quicksand'].join(','),
  },
});

export default theme;
