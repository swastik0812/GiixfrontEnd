import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function SimpleTable() {
  const classes = useStyles();
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const data = await fetch("http://localhost:3003/files").then((re) =>
        re.json()
      );
      setData(data);
      console.log(data);
    } catch (error) {
      alert("Could not fetch data");
    }
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>File name</TableCell>
            <TableCell align="center">File Path</TableCell>
            <TableCell align="right">UploadOn</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((data, index) => (
            <TableRow key={data.index}>
              <TableCell component="th" scope="row">
                {data.FileName}
              </TableCell>
              <TableCell align="right">{data.path}</TableCell>
              <TableCell align="right">{data.uploadedOn}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
