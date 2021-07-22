import { CssBaseline } from "@material-ui/core";
import Main from "../sources/layout/Main";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../sources/theme";
import WinesList from "../sources/view/Inventory/components/WinesList";
import WineDetails from "../sources/view/Inventory/WineDetails"


function MaCaveAVin({ Component, pageProps, wineCard }) {
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
