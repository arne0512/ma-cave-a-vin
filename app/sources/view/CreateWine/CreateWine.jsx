import { Button, makeStyles, Paper, TextField } from "@material-ui/core";
import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    margin: "5vh",
    fontSize: "50px",
  },

  text: {
    "& .MuiTextField-root": {
      margin: theme.spacing(5),
      width: "50%",
    },
  },

  saveButton: {
    display: "flex",
    justifyContent: "flex-end",
  },

  container: {
    width: "90%",
    margin: "20px",
    justifySelf: "center",
    padding: "50px",
  },

  littletitle: {
    marginLeft: "15px",
    marginRight: "15px",
  },

  labelInput: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
  },

  labelInputText: {
    display: "flex",
    alignItems: "baseline",
    padding: "10px",
  },
}));

function CreateWine(props) {
  const classes = useStyles();
  const [form, setForm] = useState({
    name: "",
    vintage: "",
    appellation: "",
    type: "",
    grape: "",
    organic: "",
    price: "",
    buying_year: "",
    quantity: "",
    tasting_note: "",
    comments: "",
  });

  const handleNameChange = (e) => {
    setForm({ ...form, name: e.target.value });
  };
  const handleVintageChange = (e) => {
    setForm({ ...form, vintage: e.target.value });
  };
  const handleAppellationChange = (e) => {
    setForm({ ...form, appellation: e.target.value });
  };
  const handleTypeChange = (e) => {
    setForm({ ...form, type: e.target.value });
  };
  const handleGrapeChange = (e) => {
    setForm({ ...form, grape: e.target.value });
  };
  const handleOrganicChange = (e) => {
    setForm({ ...form, organic: e.target.value });
  };
  const handlePriceChange = (e) => {
    setForm({ ...form, price: e.target.value });
  };
  const handleBuyingYearChange = (e) => {
    setForm({ ...form, buying_year: e.target.value });
  };
  const handleQuantityChange = (e) => {
    setForm({ ...form, quantity: e.target.value });
  };
  const handleTastingNoteChange = (e) => {
    setForm({ ...form, tasting_note: e.target.value });
  };
  const handleCommentsChange = (e) => {
    setForm({ ...form, comments: e.target.value });
  };
  const handleSaveWine = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <>
      <Typography variant="h2">
        <div className={classes.title}>Ajouter un vin à ma cave</div>
      </Typography>
      <Paper
        className={classes.container}
        variant="elevation"
        elevation="3"
        color="primary"
      >
        <div className={classes.labelInput}>
          <Typography variant="h2" className={classes.littletitle}>
            Domaine :
          </Typography>
          <form noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              variant="outlined"
              value={form.title}
              onChange={handleNameChange}
            />
          </form>
        </div>
        <div className={classes.labelInput}>
          <Typography variant="h2" className={classes.littletitle}>
            Type de vin :
          </Typography>
          <form noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              variant="outlined"
              value={form.title}
              onChange={handleTypeChange}
            />
          </form>
        </div>
        <div className={classes.labelInput}>
          <Typography variant="h2" className={classes.littletitle}>
            Appellation d'origine :
          </Typography>
          <form noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              variant="outlined"
              value={form.title}
              onChange={handleAppellationChange}
            />
          </form>
        </div>
        <div className={classes.labelInput}>
          <Typography variant="h2" className={classes.littletitle}>
            Cépage :
          </Typography>
          <form noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              variant="outlined"
              value={form.title}
              onChange={handleGrapeChange}
            />
          </form>
        </div>
        <div className={classes.labelInput}>
          <Typography variant="h2" className={classes.littletitle}>
            Année :
          </Typography>
          <form noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              variant="outlined"
              value={form.title}
              onChange={handleVintageChange}
            />
          </form>
        </div>
        <div className={classes.labelInput}>
          <Typography variant="h2" className={classes.littletitle}>
            Vin biologique :
          </Typography>
          <form noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              variant="outlined"
              value={form.title}
              onChange={handleOrganicChange}
            />
          </form>
        </div>
        <div className={classes.labelInput}>
          <Typography variant="h2" className={classes.littletitle}>
            Année d'achat :
          </Typography>
          <form noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              variant="outlined"
              value={form.title}
              onChange={handleBuyingYearChange}
            />
          </form>
        </div>
        <div className={classes.labelInput}>
          <Typography variant="h2" className={classes.littletitle}>
            Prix d'achat :
          </Typography>
          <form noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              variant="outlined"
              value={form.title}
              onChange={handlePriceChange}
            />
          </form>
        </div>
        <div className={classes.labelInput}>
          <Typography variant="h2" className={classes.littletitle}>
            Quantité en stock :
          </Typography>
          <form noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              variant="outlined"
              value={form.title}
              onChange={handleQuantityChange}
            />
          </form>
        </div>
        <div className={classes.labelInput}>
          <Typography variant="h2" className={classes.littletitle}>
            Note de dégustation :
          </Typography>
          <form noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              variant="outlined"
              value={form.title}
              onChange={handleTastingNoteChange}
            />
          </form>
          / 10
        </div>
        <Typography
          variant="h2"
          className={classes.littletitle}
          style={{ marginLeft: "25px", marginTop: "10px" }}
        >
          Commentaires de dégustation :
        </Typography>
        <form className={classes.text} noValidate autoComplete="off">
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={10}
            variant="outlined"
            value={form.text}
            onChange={handleCommentsChange}
          />
        </form>
        <div className={classes.saveButton}>
          <Button variant="outlined" color="primary" onClick={handleSaveWine}>
            Enregistrer
          </Button>
        </div>
      </Paper>
    </>
  );
}

export default CreateWine;
