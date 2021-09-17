import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  button: {
    border: "solid 2px #6d071a",
    backgroundColor: "#6d071a",
    color: "white",
    margin: "10px",
    borderRadius: "10px",
    width: "5px",
    "&:hover": {
      backgroundColor: "white",
      color: "#6d071a",
    },
  },

  containerButton: {
    display: "flex",
    justifyContent: "center",
  },
  root: {
    display: "flex",
    justifyContent: "center",
    marginTop: "100px",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },

  containerPaper: {
    width: "30%",
    height: "100%",
    margin: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "30px",
    borderRadius: "20px",
    border: "5px solid #6d071a",
  },

  card: {
    display: "flex",
    flexDirection: "column",
    padding: "10%",
  },
}));

function WineDetails({ wineCard: [wineCard] }) {
  const classes = useStyles();
  const [wine, setWine] = useState(wineCard);

  const upDateQuantity = (newQuantity) => {
    if (newQuantity >= 0) {
      setWine({ ...wine, quantity: newQuantity });
      axios.patch(`http://localhost:3030/wines/${wineCard.id}`, {
        quantity: newQuantity,
      });
    }
  };

  return (
    <>
      <div className={classes.root}>
        <Paper
          className={classes.containerPaper}
          variant="elevation"
          elevation="3"
          color="primary"
        >
          <div className={classes.card}>
            <Typography
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "10px",
                color: "#6d071a",
              }}
            >
              <strong>Domaine : </strong>
              {wine.estate_name}
            </Typography>
            <Typography
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "10px",
                color: "#6d071a",
              }}
            >
              <strong>Années : </strong>
              {wine.vintage}
            </Typography>
            <Typography
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "10px",
                color: "#6d071a",
              }}
            >
              <strong>Appellation d'origine : </strong>
              {wine.appellation}
            </Typography>
            <Typography
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "10px",
                color: "#6d071a",
              }}
            >
              <strong>Type de vin : </strong>
              {wine.type}
            </Typography>
            <Typography
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "10px",
                color: "#6d071a",
              }}
            >
              <strong>Cépage(s) : </strong>
              {wine.grape}
            </Typography>
            <Typography
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "10px",
                color: "#6d071a",
              }}
            >
              <strong>Vin biologique : </strong>
              {wine.organic}
            </Typography>
            <Typography
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "10px",
                color: "#6d071a",
              }}
            >
              <strong>Prix : </strong>
              {wine.price}€
            </Typography>
            <Typography
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "10px",
                color: "#6d071a",
              }}
            >
              <strong>Année d'achat : </strong>
              {wine.buying_year}
            </Typography>
            <Typography
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "10px",
                color: "#6d071a",
              }}
            >
              <strong>Quantité en stock : </strong>
              {wine.quantity}
            </Typography>
            <div className={classes.containerButton}>
              <Button
                className={classes.button}
                onClick={() => upDateQuantity(wine.quantity + 1)}
              >
                +
              </Button>
              <Button
                className={classes.button}
                onClick={() => upDateQuantity(wine.quantity - 1)}
              >
                -
              </Button>
            </div>
            <Typography
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "10px",
                color: "#6d071a",
              }}
            >
              <strong>Note : </strong> {wine.tasting_note}/10
            </Typography>
            <Typography
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "10px",
                color: "#6d071a",
              }}
            >
              <strong>Commentaires : </strong>
              {wine.comments}
            </Typography>
          </div>
          {/* <Button className={classes.button}>Modifier la fiche</Button> */}
        </Paper>
      </div>
    </>
  );
}

export default WineDetails;
