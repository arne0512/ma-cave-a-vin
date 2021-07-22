import palette from "./palette";
import typography from "./typography";
import { responsiveFontSizes } from "@material-ui/core";
import { createTheme } from '@material-ui/core/styles'

const theme = responsiveFontSizes(
    createTheme({
      palette: palette,
      typography : typography, 
    })
  );

  export default theme; 