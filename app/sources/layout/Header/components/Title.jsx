import { makeStyles } from "@material-ui/core";
import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";

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
      fontWeight: "bold",
    },
    marginRight: "20px",
    borderLeft: "1px solid",
    borderRight: "1px solid",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
}));

function title(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Link href="/">
        <Typography className={classes.typo}>Wine Cellar</Typography>
      </Link>
    </div>
  );
}

export default title;
