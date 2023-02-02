import {
  HeaderList,
  ActionIconsContainerMobile,
  ActionIconsContainerPC,
} from "../../styles/theme/navbar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { ListItemButton, ListItemIcon, Badge, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../context/AppProvider";

export const Actions = ({ res }) => {
  const { cart, setCart } = useContext(AppContext);
  const Component = res ? ActionIconsContainerMobile : ActionIconsContainerPC;
  return (
    <Component>
      <HeaderList type="row">
        <ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Badge badgeContent={1} color="error">
              <Link to="/cart" className="links">
                <ShoppingCartIcon />
              </Link>
            </Badge>
          </ListItemIcon>
        </ListItemButton>

        <Divider orientation="vertical" flexItem />

        <ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <PersonIcon />
          </ListItemIcon>
        </ListItemButton>
      </HeaderList>
    </Component>
  );
};
