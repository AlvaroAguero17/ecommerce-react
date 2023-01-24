import {
  HeaderList,
  NavbarContainer,
  NavbarHeader,
} from "../../styles/theme/navbar";
import SearchIcon from "@mui/icons-material/Search";
import { ListItemText, ListItemButton, ListItemIcon } from "@mui/material";
import { Actions } from "./actions";
import { useContext } from "react";
import { AppContext } from "../../context/AppProvider";

export const NavbarPC = ({ res }) => {
  const { setShowSearch } = useContext(AppContext);
  return (
    <NavbarContainer>
      <NavbarHeader>PetShop</NavbarHeader>
      <HeaderList type="row">
        <ListItemText primary="Home" />
        <ListItemText primary="Categories" />
        <ListItemText primary="Products" />
        <ListItemText primary="Contact us" />
        <ListItemButton>
          <ListItemIcon>
            <SearchIcon onClick={() => setShowSearch(true)} />
          </ListItemIcon>
        </ListItemButton>
      </HeaderList>
      <Actions res={res} />
    </NavbarContainer>
  );
};
