import { CssBaseline } from "@material-ui/core";
import Main from "../sources/Main"



function MaCaveAVin({ Component, pageProps }) {

  return (
  <Main>
    <CssBaseline />
    <Component {...pageProps} />
  </Main>
  );
}

export default MaCaveAVin
