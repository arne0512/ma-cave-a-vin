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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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
              name="estate_name"
              onChange={handleChange}
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
              name="type"
              onChange={handleChange}
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
              name="appellation"
              onChange={handleChange}
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
              name="grape"
              onChange={handleChange}
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
              name="vintage"
              onChange={handleChange}
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
              name="organic"
              onChange={handleChange}
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
              name="buying_year"
              onChange={handleChange}
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
              name="price"
              onChange={handleChange}
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
              name="quantity"
              onChange={handleChange}
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
              name="tasting_note"
              onChange={handleChange}
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
            name="comments"
            onChange={handleChange}
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
