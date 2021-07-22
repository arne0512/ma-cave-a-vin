import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="common">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        <i>Ma Cave à Vin{" "}</i>
      </Link>{" "}
      <i>{new Date().getFullYear()} - par Arnaud Clerc
      </i>
    </Typography>
  );
}

//
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor: "#6d071a",
    textAlign: "center"
  },
}));

function Footer(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
