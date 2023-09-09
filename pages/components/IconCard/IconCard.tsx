import { Box, Typography } from "@mui/material";
import React, { Component } from "react";

type Props = {
  imgPath: string;
  title: string;
  text: string;
};

type State = {};

export default class IconCard extends Component<Props, State> {
  state = {};

  render() {
    const { imgPath, title, text } = this.props;

    return (
      <Box
        key="card"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        padding="16px"
        onClick={() => {
          console.log("Box clicked");
        }}
        sx={{
          cursor: "pointer",
          ":hover": {
            backgroundColor: "rgba(40,40,40, 0.4)",
          },
          ":active": {
            backgroundColor: "",
          },
        }}
      >
        <Box
          key="iconGroup"
          display="flex"
          flexDirection="column"
          alignItems="center"
          maxWidth="140px"
          minWidth="120px"
        >
          <Box
            component="img"
            sx={{
              maxHeight: "10vh",
              maxWidth: "10vh",
            }}
            src={imgPath}
            alt="Description"
          />
          <Typography variant="h6" fontWeight="bold" >
            {this.props.title}
          </Typography>
        </Box>

        <Box key="content" paddingLeft="56px" alignItems="center">
          <Typography variant="h6" maxWidth="600px">{this.props.text}</Typography>
        </Box>
      </Box>
    );
  }
}
