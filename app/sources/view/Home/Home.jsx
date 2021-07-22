import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import WineDetails from "../Inventory/WineDetails";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    padding: "10px",
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
}));

function Home(props) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Container component="main" className={classes.main}>
          <Typography variant="h1">
            Bienvenue chez <i>"Ma Cave à Vin"</i>
          </Typography>
          <Typography variant="h5">
            <i>"Ma Cave à Vin"</i> est une application qui vous permet d'avoir
            accès très facilement au contenu de votre cave, de gérer au mieux
            vos stocks mais également de noter et commenter vos dégustations.
          </Typography>
          <Typography variant="h5">
            Vous souhaitez vous lancer ? C'est par ici "inscription"
          </Typography>
        </Container>
      </div>
    </>
  );
}

export default Home;
