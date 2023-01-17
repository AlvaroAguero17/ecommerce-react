import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import { Outlet } from "react-router-dom";
import { NavbarMobile } from "./navbar/NavbarMobile";
import { NavbarPC } from "./navbar/NavbarPC";

export const Header = () => {
  const theme = useTheme();
  const res = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      {res ? <NavbarMobile res={res} /> : <NavbarPC res={res} />}
      <Outlet />
    </>
  );
};
