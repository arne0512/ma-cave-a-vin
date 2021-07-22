import React from "react";
import WinesList from "../Inventory/components/WinesList";
import Button from "@material-ui/core/Button";
import Link from "next/link";

function Inventory({ wines }) {
  return (
    <div>
      <WinesList wines={wines} />
      <Link href="/ajouter-un-vin">
        <Button variant="outlined" color="primary">
          Ajouter un vin
        </Button>
      </Link>
    </div>
  );
}

export default Inventory;
