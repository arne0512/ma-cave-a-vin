import { makeStyles } from "@material-ui/core";
import React from "react";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    border: "none",
  },
  typo: {
    color: "white",
    fontSize: "22px",
    "&:hover": {
      cursor: "pointer",
    },
    marginRight: "20px",
    borderLeft: "1px solid",
    paddingLeft: "20px",
  },
}));

function title(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.typo}>Ma Cave à Vin</Typography>
    </div>
  );
}

export default title;
