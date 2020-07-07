import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import UplaodFile from "./UploadFile";
import FilterTable from "./FileTable";
import UploadFile from "./UploadFile";

class Main extends Component {
  state = {
    fileUpdateAgain: false,
    stopUpdate: false,
  };
  updateAgain = () => {
    this.setState({ fileUpdateAgain: true });
    this.setState({ stopUpdate: false });
  };
  stopUpdateAgain = () => {
    this.setState({ stopUpdate: true });
  };

  render() {
    console.log(this.state.fileUpdateAgain);
    return (
      <Grid container style={{ padding: 10 }}>
        <Grid item md={4} xs={12} sm={3} lg={3}>
          <UploadFile updateFile={this.updateAgain} />
        </Grid>
        <Grid item md={8} xs={12} sm={9} lg={9}>
          <FilterTable
            updateAgain={this.state.fileUpdateAgain}
            stopUpdating={this.stopUpdateAgain}
            stopUpdate={this.state.stopUpdate}
          />
        </Grid>
      </Grid>
    );
  }
}

export default Main;
