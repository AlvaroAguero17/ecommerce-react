import { TextField } from "@mui/material";
import { styled, Box } from "@mui/system";

export const SearchBoxContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "#000",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 99999,
  opacity: 0.9,
}));

export const SearchField = styled(TextField)(({ theme }) => ({
  ".MuiInputLabel-root": {
    color: "#fff",
  },
  ".MuiInput-root": {
    fontSize: "1rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "2rem",
    },
    color: "#5AA6A6",
  },
  ".MuiInput-root::before": {
    borderBottom: "1px solid #5AA6A6",
  },
  padding: "0 0 0 40px",
}));
