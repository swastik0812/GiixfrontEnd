import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Axios from "axios";

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
  let valueForUpdate = "";
  const inputEl = null;
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [ID, setID] = useState(0);

  const getData = async () => {
    try {
      const data = await fetch("http://localhost:3003/files").then((re) =>
        re.json()
      );
      setData(data);
    } catch (error) {
      alert("Could not fetch data");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const showText = (id) => {
    setShow(true);
    setID(id);
  };

  const updateData = async () => {
    const Data = {
      id: ID,
      name: valueForUpdate,
    };
    Axios.post("http://localhost:3003/updateName", Data)
      .then((response) => {
        setID(0);
        valueForUpdate = "";
      })
      .catch((e) => {
        alert("Could not update data");
      });
  };

  const setValue = (event) => {
    valueForUpdate = event.target.value;
  };

  const input = (
    <div>
      <input
        accept="*"
        id="outlined-button-file"
        multiple
        type="text"
        ref={inputEl}
        style={{ margin: 10, width: 150 }}
        onChange={(e) => {
          setValue(e);
        }}
      />
      <button
        style={{
          width: 60,
          height: 25,
          margin: 10,
        }}
        type="submit"
        onClick={updateData}
      >
        upload
      </button>
    </div>
  );

  let Hide = null;
  if (ID !== 0) {
    Hide = { opacity: 0, position: "absolute", zIndex: -1 };
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">File name</TableCell>
            <TableCell align="center">File Path</TableCell>
            <TableCell align="center">UploadOn</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((data) => (
            <TableRow key={data._id}>
              {show && data._id === ID ? input : null}
              <TableCell
                component="th"
                style={data._id === ID ? Hide : null}
                scope="row"
                onClick={() => showText(data._id)}
              >
                {data.Name}
              </TableCell>
              <TableCell style={data._id === ID ? Hide : null} align="right">
                {data.path}
              </TableCell>
              <TableCell style={data._id === ID ? Hide : null} align="right">
                {data.uploadedOn}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
