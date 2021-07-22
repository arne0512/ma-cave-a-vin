import { makeStyles, Button } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },

  buttonco: {
    backgroundColor: "#6d071a",
    color: "white",
    fontFamily: "Open Sans Condensed, sans-serif",
    fontWeight: 400,
    fontSize: "20px",
    marginRight: "40px",
    "&:hover": {
      backgroundColor: "white",
      color: "#C0392B"
    },
  },
}));

function ConnectionButton(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        aria-label="connexion"
        variant="contained"
        color="secondary"
        className={classes.buttonco}
      >
        Connexion{" "}
      </Button>
    </div>
  );
}

export default ConnectionButton;
