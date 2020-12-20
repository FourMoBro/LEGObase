import { createMuiTheme, colors } from '@material-ui/core';
import shadows from './shadows';
import typography from './typography';

const theme = createMuiTheme({
  palette: {
    background: {dark: colors.blueGrey[700], default: colors.common.white, paper: colors.common.white},
    primary: {main: colors.blueGrey[900]},
    secondary: {main: colors.blueGrey[900]},
    text: {primary: colors.deepOrange[500], secondary: colors.cyan[600]}},
  shadows,
  typography
});

export default theme;

//good card color #31333b
//#cce2ff text selection
//button color? #008cc1
//#000000de

//#bcc0c9 lables-relationships
//#fd766e nice orange text

