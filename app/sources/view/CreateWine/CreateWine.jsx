import { Button, makeStyles, Paper, TextField } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    fontSize: "50px",
    padding: "8%",
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
    width: "80%",
    marginLeft: "10%",
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
  const router = useRouter();
  const classes = useStyles();
  const [form, setForm] = useState({
    estate_name: "",
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

  const handleEstateNameChange = (e) => {
    setForm({ ...form, estate_name: e.target.value });
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
  //   const handleChange = (e) => {
  //     setForm({ ...form, [e.target.name]: e.target.value });
  //   };

  //   useEffect(() => {
  //     if (match?.params.id) {
  //       axios
  //         .get(`http//localhost:3030/wines/${props.params.id}`)
  //         .then((response) => setForm(response.data));
  //     }
  //   }, []);

  const handleSaveWine = async () => {
    axios.post("http://localhost:3030/wines", form).then(() => {
      router.push("/inventaire-cave");
    });
    // if (match?.params.id) {
    //   axios
    //     .patch(`http://localhost:3030/wines/${props.params.id}`, form)
    //     .then(() => {
    //     });
    // } else {
    // await axios.post("http://localhost:3030/wines", form);
  };

  return (
    <>
      <Paper
        className={classes.container}
        variant="elevation"
        elevation="3"
        color="primary"
      >
        <Typography variant="h2">
          <div className={classes.title}>Ajouter un vin à ma cave</div>
        </Typography>
        <div className={classes.labelInput}>
          <Typography variant="h2" className={classes.littletitle}>
            Domaine :
          </Typography>
          <form noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              variant="outlined"
              value={form.estate_name}
              onChange={handleEstateNameChange}
              //   onChange={handleChange}
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
              value={form.type}
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
              value={form.appellation}
              onChange={handleAppellationChange}
            />
          </form>
        </div>
        <div className={classes.labelInput}>
          <Typography variant="h2" className={classes.littletitle}>
            Cépage(s) :
          </Typography>
          <form noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              variant="outlined"
              value={form.grape}
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
              value={form.vintage}
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
              value={form.organic}
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
              value={form.buying_year}
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
              value={form.price}
              onChange={handlePriceChange}
            />
          </form>
          <Typography variant="h2">€</Typography>
        </div>
        <div className={classes.labelInput}>
          <Typography variant="h2" className={classes.littletitle}>
            Quantité en stock :
          </Typography>
          <form noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              variant="outlined"
              value={form.quantity}
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
              value={form.tasting_note}
              onChange={handleTastingNoteChange}
            />
          </form>
          <Typography variant="h2" className={classes.littletitle}>
            / 10{" "}
          </Typography>
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
            value={form.comments}
            onChange={handleCommentsChange}
          />
        </form>
        <div className={classes.saveButton}>
          <Button
            variant="outlined"
            style={{ color: "white", backgroundColor: "#6d071a" }}
            onClick={handleSaveWine}
          >
            Ajouter
          </Button>
        </div>
      </Paper>
    </>
  );
}

export default CreateWine;
