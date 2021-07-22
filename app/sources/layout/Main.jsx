import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
    // backgroundImage: "url('/assets/interieurESPACE1900.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    bottom: 0,
  },
});

function Main(props) {
  const classes = useStyles();
  const { children } = props;

  return (
    <div className={classes.root}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Main;
