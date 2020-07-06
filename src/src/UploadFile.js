import React, { Component } from "react";
import ButtonBase from "@material-ui/core/ButtonBase";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

class UploadFile extends Component {
  constructor(props) {
    super(props);
    this.inputEl = null;
    this.state = {
      filesSelected: 0,
    };
  }

  onButtonClick = () => {
    // `current` points to the mounted file input element
    this.inputEl.click();
  };
  render() {
    return (
      <Paper
        elevation={2}
        style={{
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        Upload Files
        <br />
        <div>
          <input
            accept="*"
            // className={classes.input}
            id="outlined-button-file"
            multiple
            type="file"
            ref={(ref) => (this.inputEl = ref)}
            style={{ opacity: 0, position: "absolute", zIndex: -1 }}
            onChange={(e) => {
              this.setState({ filesSelected: this.inputEl.files.length });
            }}
          />
        </div>
        <br />
        <label htmlFor="outlined-button-file" style={{ cursor: "pointer" }}>
          <ButtonBase
            onClick={this.onButtonClick}
            style={{
              backgroundColor: "#f7f7f7",
              borderWidth: 1,
              borderRadius: 2,
              borderColor: "#f7f7f7",
              paddingLeft: "5vw",
              paddingRight: "5vw",
              paddingTop: 20,
              paddingBottom: 20,
              marginBottom: 20,
            }}
          >
            {`Click to Upload (${this.state.filesSelected} ${
              this.state.filesSelected > 0 ? "files" : "file"
            }) selected`}
          </ButtonBase>
        </label>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            console.log("FILES ARE: ", this.inputEl.files);
          }}
        >
          Upload
        </Button>
      </Paper>
    );
  }
}

export default UploadFile;
