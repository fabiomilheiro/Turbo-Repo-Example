import React from "react";
import { Button as MuiButton } from "@mui/material";
interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

export const Button = ({children, onClick}: Props) => {  
  return <MuiButton onClick={onClick} variant="contained" sx={{backgroundColor: "maroon", color: "white"}}>{children}</MuiButton>;
};
