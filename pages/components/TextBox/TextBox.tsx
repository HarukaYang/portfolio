import { Box, Typography } from "@mui/material";
import React, { Component } from "react";

type Props = {
  text: string;
};

type State = {};

export default class TextBox extends Component<Props, State> {
  state = {};

  render() {
    return (
      <Box
          key="textBox"
          className="text-box"
          sx={{
            display: "block",
            padding: "24px",
            backgroundColor: "rgba(0,0,0, 0.4)" /* Black w/opacity/see-through */,
            color: "white",
            position: 'relative',
            fontWeight: "bold",
            border: "1px solid #f1f1f1",
            zIndex: "2",
            width: "60%",
            textAlign: "center",
          }}
        >
          <Typography
            variant='h6'
            fontWeight='bold'
            >
            {this.props.text}
          </Typography>
        </Box>
    );
  }
}
