import React from "react";
import Typography from "@material-ui/core/Typography";

function WineDetails({ wineCard }) {
  return (
    <>
      <Typography>Domaine : {wineCard.name}</Typography>
      <Typography>Années : {wineCard.vintage}</Typography>
      <Typography>Appellation d'origine : {wineCard.appellation}</Typography>
      <Typography>Type de vin : {wineCard.type}</Typography>
      <Typography>Cépage(s) : {wineCard.grape}</Typography>
      <Typography>Vin biologique : {wineCard.organic}</Typography>
      <Typography>Prix : {wineCard.price}</Typography>
      <Typography>Année d'achat : {wineCard.buying_year}</Typography>
      <Typography>Quantité en stock : {wineCard.quantity}</Typography>
      <Typography>Note : {wineCard.tasting_note}</Typography>
      <Typography>Commentaires : {wineCard.comments}</Typography>
    </>
  );
}

export default WineDetails;
