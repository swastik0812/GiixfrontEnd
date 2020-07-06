import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import UplaodFile from "./UploadFile";
import FilterTable from "./FileTable";
import UploadFile from "./UploadFile";

class Main extends Component {
  render() {
    return (
      <Grid container style={{ padding: 10 }}>
        <Grid item md={4} xs={12} sm={3} lg={3}>
          <UploadFile />
        </Grid>
        <Grid item md={8} xs={12} sm={9} lg={9}>
          <FilterTable />
        </Grid>
      </Grid>
    );
  }
}

export default Main;
