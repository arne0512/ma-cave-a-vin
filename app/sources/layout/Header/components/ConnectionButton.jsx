import { makeStyles, Button } from "@material-ui/core";
import React from "react";
import Tooltip from '@material-ui/core/Tooltip';


const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },

  connectionButton: {
    backgroundColor: "#6d071a",
    color: "white",
    fontFamily: "Open Sans Condensed, sans-serif",
    fontWeight: 400,
    fontSize: "20px",
    marginRight: "40px",
    border: "1px solid white",
    "&:hover": {
      backgroundColor: "white",
      color: "#C0392B",
    },
  },
}));

function ConnectionButton(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Tooltip title="In Progress..." arrow>
        <Button
          aria-label="connexion"
          variant="contained"
          color="secondary"
          className={classes.connectionButton}
        >
          Connexion{" "}
        </Button>
      </Tooltip>
    </div>
  );
}

export default ConnectionButton;
