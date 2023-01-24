import { IconButton } from "@mui/material";
import { NavbarContainer, NavbarHeader } from "../../styles/theme/navbar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Actions } from "./actions";
import { useContext } from "react";
import { AppContext } from "../../context/AppProvider";

export const NavbarMobile = ({ res }) => {
  const { setDrawerOpen, setShowSearch } = useContext(AppContext);

  return (
    <NavbarContainer>
      <IconButton onClick={() => setDrawerOpen(true)}>
        <MenuIcon />
      </IconButton>
      <NavbarHeader textAlign={"center"} variant="h4">
        PetShop
      </NavbarHeader>
      <IconButton>
        <SearchIcon onClick={() => setShowSearch(true)} />
      </IconButton>
      <Actions res={res} />
    </NavbarContainer>
  );
};
