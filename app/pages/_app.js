import { CssBaseline } from "@material-ui/core";
import Main from "../sources/Main";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../sources/theme";


function MaCaveAVin({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <CssBaseline />
        <Component {...pageProps} />
      </Main>
    </ThemeProvider>
  );
}

export default MaCaveAVin;
