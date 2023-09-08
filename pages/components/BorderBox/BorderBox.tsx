import { Box } from "@mui/material";
import React, { Component, ReactNode } from "react";

type Props = {
  children: ReactNode;  // Define the children prop
};

type State = {};

export default class BorderBox extends Component<Props, State> {
  state = {};

  render() {
    const { children } = this.props;  // Destructure children from props

    return (
      <Box
          key="BorderBox"
          className="text-box"
          sx={{
            display: "block",
            padding: "24px",
            backgroundColor: "rgba(0,0,0, 0.4)", /* Black w/opacity/see-through */
            color: "white",
            position: 'relative',
            fontWeight: "bold",
            border: "1px solid #f1f1f1",
            zIndex: "2",
            width: "60%",
          }}
        >
          {children}  {/* Render the children here */}
        </Box>
    );
  }
}