import { makeStyles } from '@material-ui/styles';
import React from 'react';
import Title from "./components/Title"
import CellarButton from "./components/CellarButton"
import ConnectionButton from "./components/ConnectionButton"


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      display: "flex",
      height: "100px",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "brown",
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
