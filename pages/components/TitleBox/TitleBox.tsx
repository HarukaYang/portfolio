import { Box, Typography } from "@mui/material";
import React, { Component } from "react";

type Props = {};

type State = {};

export default class TitleBox extends Component<Props, State> {
  state = {};

  render() {
    return (
      <Box
        key="titleBox"
        sx={{
          display: "block",
          padding: "24px",
          backgroundColor: "rgba(0,0,0, 0.4)" /* Black w/opacity/see-through */,
          color: "white",
          fontWeight: "bold",
          border: "1px solid #f1f1f1",
          transform: 'translate(0, -70px)',
          zIndex: "2",
          width: "60%",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h2"
          fontWeight="bold"
          marginBottom="12px"
          sx={{
            textShadow: "grey 1px 0 24px",
          }}
        >
          I am Dingshuo Yang
        </Typography>
        <Typography
          sx={{
            textShadow: "grey 2px 0 10px",
          }}
          fontWeight="bold"
        >
          and I am a fullstack developer
        </Typography>
        <Typography
          sx={{
            textShadow: "grey 2px 0 10px",
          }}
          fontWeight="bold"
        >
        </Typography>
      </Box>
    );
  }
}
