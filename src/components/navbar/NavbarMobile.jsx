import { IconButton } from "@mui/material";
import { NavbarContainer, NavbarHeader } from "../../styles/theme/navbar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Actions } from "./actions";

export const NavbarMobile = ({ res }) => {
  return (
    <NavbarContainer>
      <IconButton>
        <MenuIcon />
      </IconButton>
      <NavbarHeader textAlign={"center"} variant="h4">
        PetShop
      </NavbarHeader>
      <IconButton>
        <SearchIcon />
      </IconButton>
      <Actions res={res} />
    </NavbarContainer>
  );
};
