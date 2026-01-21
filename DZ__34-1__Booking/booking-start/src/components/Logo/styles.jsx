import { styled } from "@mui/material";
import { Link } from "react-router-dom";

export const Wrapper = styled(Link)(({ theme }) => {
  return {
    display: "flex",
    textDecoration: "none",
    alignItems: "center",
    color: theme.palette.primary.main,
    fontSize: "24px",
  };
});
