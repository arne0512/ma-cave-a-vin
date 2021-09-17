import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Link from "next/link";

const columns = [
  {
    id: "estate_name",
    label: "Domaine",
    minWidth: 170,
    color: "white",
    backgroundColor: "#6d071a",
  },
  {
    id: "type",
    label: "Type",
    minWidth: 100,
    color: "white",
    backgroundColor: "#6d071a",
  },
  // {
  //   id: "grape",
  //   label: "Cépage",
  //   minWidth: 200,
  //   color: "white",
  //   backgroundColor: "#6d071a",
  // },
  {
    id: "vintage",
    label: "Année",
    minWidth: 170,
    align: "right",
    color: "white",
    backgroundColor: "#6d071a",
  },
  {
    id: "organic",
    label: "Vin Biologique",
    minWidth: 170,
    align: "right",
    color: "white",
    backgroundColor: "#6d071a",
  },
  {
    id: "price",
    label: "Prix d'achat €",
    minWidth: 170,
    align: "right",
    color: "white",
    backgroundColor: "#6d071a",
  },
  {
    id: "quantity",
    label: "Quantité",
    minWidth: 170,
    align: "right",
    color: "white",
    backgroundColor: "#6d071a",
  },
  {
    id: "tasting_note",
    label: "Note",
    minWidth: 170,
    align: "right",
    color: "white",
    backgroundColor: "#6d071a",
  },
];

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },

  rowColor: {
    color: "#6d071a",
    "&:hover": {
      fontWeight: "bold",
    },
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
                    style={{
                      minWidth: column.minWidth,
                      color: column.color,
                      backgroundColor: column.backgroundColor,
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {wines.map((wine) => {
                return (
                  <Link href={"/inventaire-cave/" + wine.id} key={wine.id}>
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={wine.code}
                    >
                      {columns.map((column) => {
                        const value = wine[column.id];
                        return (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            className={classes.rowColor}
                          >
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
