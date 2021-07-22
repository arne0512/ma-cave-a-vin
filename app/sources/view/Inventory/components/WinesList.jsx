import React from "react";
import { makeStyles, rgbToHex } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import WineDetails from "../WineDetails";
import Link from "next/link";

const columns = [
  { id: "name", label: "Domaine", minWidth: 170 },
  { id: "type", label: "Type", minWidth: 100 },
  {
    id: "vintage",
    label: "Année",
    minWidth: 170,
    align: "right",
  },
  {
    id: "price",
    label: "Prix d'achat (unitaire)",
    minWidth: 170,
    align: "right",
  },
  {
    id: "quantity",
    label: "Quantité",
    minWidth: 170,
    align: "right",
  },
];

const useStyles = makeStyles({
  root: {
    width: "100%",
    // opacity: 0.5,
  },
  container: {
    maxHeight: 440,
  },
});

function WinesList({ wines }) {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {wines.map((row) => {
                return (
                  <Link href={"/inventaire-cave/" + row.id} key={row.id}>
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                  </Link>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
}

export default WinesList;
