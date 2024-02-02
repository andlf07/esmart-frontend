import { ButtonProps, Button as MuiButton } from "@mui/material";
import React from "react";

interface Props extends ButtonProps {}

const Button: React.FC<Props> = ({ children, ...props }) => {
  return (
    <MuiButton
      sx={{
        backgroundColor: "blue",
        color: "#fff",
        borderRadius: "8px",
        height: "45px",
        fontSize: "1rem",
        gap: "10px",
        "&:hover": {
          backgroundColor: "#5da5e8",
        },
        ":disabled": { color: "#fff", backgroundColor: "#BDBDBD" },
      }}
      {...props}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
