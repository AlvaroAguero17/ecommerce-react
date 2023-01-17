import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const OffersContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    padding: "40px 0px 40px 0px",
  },

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px 0px 20px 0px",
  overflow: "hidden",
  background: "#248071",
}));

export const Message = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    fontSize: "3rem",
  },
  color: "#E4E3D5",
  fontSize: "1.5rem",
}));
