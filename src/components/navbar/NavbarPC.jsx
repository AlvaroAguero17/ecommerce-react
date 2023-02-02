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
import { Link } from "react-router-dom";

export const NavbarPC = ({ res }) => {
  const { setShowSearch } = useContext(AppContext);
  return (
    <NavbarContainer>
      <NavbarHeader>
        <Link to="/" className="logo">
          PetShop
        </Link>
      </NavbarHeader>

      <HeaderList type="row">
        <ListItemText>
          <Link to="/" className="links">
            Home
          </Link>
        </ListItemText>

        <ListItemText>
          <Link to="/" className="links">
            Categories
          </Link>
        </ListItemText>
        <ListItemText>
          <Link to="/" className="links">
            Products
          </Link>
        </ListItemText>
        <ListItemText>
          <Link to="/" className="links">
            Contact us
          </Link>
        </ListItemText>
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
