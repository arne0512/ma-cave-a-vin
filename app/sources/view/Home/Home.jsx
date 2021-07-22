import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    padding: "150px",
   
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
          <Typography variant="h1" style={{color: "#6d071a", marginTop: "50px"}}>
            Bienvenue sur le site de <i>"Wine Cellar"</i>
          </Typography>
          <Typography variant="h5" style={{color: "white", fontSize: "30px", marginTop: "50px"}}>
            <strong><i>"Wine Cellar"</i> est une application qui vous permet d'avoir
            accès très facilement au contenu de votre cave, de gérer au mieux
            vos stocks mais également de noter et commenter vos dégustations.</strong>
          </Typography>
          <Typography variant="h5" style={{color: "white", fontSize: "30px", marginTop: "50px"}}>
          <strong>Vous souhaitez vous lancer ? C'est par ici <i>"inscription"</i></strong>
          </Typography>
        </Container>
      </div>
    </>
  );
}

export default Home;
