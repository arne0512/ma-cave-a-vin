import { makeStyles } from '@material-ui/styles';
import React from 'react';
import Title from "./components/Title"
import CellarButton from "./components/CellarButton"
import ConnectionButton from "./components/ConnectionButton"


const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      justifyContent: "space-around",
      height: "100px",
      alignItems: "center",
      backgroundColor: "#6d071a",
      position: "fixed",
      width: "100%",
      top: 0,
      borderBottom: "1px solid black",
      zIndex: 7
    },
    
  }));

function Header(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Title />
            <CellarButton /> 
            <ConnectionButton />
        </div>
    );
}

export default Header;
