import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import FilterTable from "./FileTable";
import UploadFile from "./UploadFile";

class Main extends Component {
  state = {
    fileSelected: 0,
  };
  updateFileSelected = (data) => {
    this.setState({ fileSelected: data });
  };

  render() {
    return (
      <Grid container style={{ padding: 10 }}>
        <Grid item md={4} xs={12} sm={3} lg={3}>
          <UploadFile
            fileSelected={this.state.fileSelected}
            updateFileSelected={this.updateFileSelected}
          />
        </Grid>
        <Grid item md={8} xs={12} sm={9} lg={9}>
          <FilterTable fileSelected={this.state.fileSelected} />
        </Grid>
      </Grid>
    );
  }
}

export default Main;
