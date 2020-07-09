import React, { Component } from "react";
import ButtonBase from "@material-ui/core/ButtonBase";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import axios from "axios";
import * as ERRORS from "./store/const";

import { object } from "prop-types";

class UploadFile extends Component {
  uploadingFiles = async (data) => {
    Object.keys(data).forEach(async (files) => {
      const requestFormData = new FormData();
      requestFormData.append("uploads", data[files]);
      try {
        axios
          .post("http://localhost:3003/", requestFormData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((res) => {
            this.props.updateFileSelected(0);
          })
          .catch((err) => {
            alert(ERRORS.Error.error_2);
          });
      } catch (error) {
        console.log(error);
        alert(ERRORS.Error.error_3);
      }
    });
  };
  onButtonClick = () => {
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
            id="outlined-button-file"
            multiple
            type="file"
            ref={(ref) => (this.inputEl = ref)}
            style={{ opacity: 0, position: "absolute", zIndex: -1 }}
            onChange={(e) => {
              this.props.updateFileSelected(this.inputEl.files.length);
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
            {`Click to Upload (${this.props.fileSelected} ${
              this.props.fileSelected > 0 ? "files" : "file"
            }) selected`}
          </ButtonBase>
        </label>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            this.uploadingFiles(this.inputEl.files);
          }}
        >
          Upload
        </Button>
      </Paper>
    );
  }
}

export default UploadFile;
