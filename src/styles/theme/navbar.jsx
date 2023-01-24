import { Button, List, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";

export const NavbarContainer = styled(Box)(() => ({
  display: "flex",
  marginTop: "4",
  justifyContent: "center",
  alignItems: "center",
  padding: "2px 8px",
}));

export const NavbarHeader = styled(Typography)(() => ({
  padding: "4px",
  flexGrow: 1,
  fontSize: "4rem",
  color: "#1F69A4",
}));

export const HeaderList = styled(List)(({ type }) => ({
  display: type === "row" ? "flex" : "block",
  flexGrow: 3,
  justifyContent: "center",
  alignItems: "center",
}));

export const ActionIconsContainerMobile = styled(Box)(() => ({
  display: "flex",
  background: "#248071",
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  alignItems: "center",
  zIndex: 99,
  borderTop: "1px solid #151C7D",
}));

export const ActionIconsContainerPC = styled(Box)(() => ({
  flexGrow: 0,
}));

export const DrawerCloseButton = styled(Button)(() => ({
  position: "absolute",
  top: 10,
  left: "250px",
  zIndex: 1999,
}));
