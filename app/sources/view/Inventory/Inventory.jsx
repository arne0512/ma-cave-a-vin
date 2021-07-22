import React from "react";
import WinesList from "../Inventory/components/WinesList";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    fontSize: "50px",
    padding: "10%",
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

function Inventory({ wines }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <WinesList wines={wines} />
      <Link href="/ajouter-un-vin">
        <a style={{ textDecoration: "none", color: "inherit" }}>
          <Button variant="contained" style={{color: "#6d071a"}}>
            Ajouter un vin
          </Button>
        </a>
      </Link>
    </div>
  );
}

export default Inventory;
