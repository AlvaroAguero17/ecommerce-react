import {
  HeaderList,
  ActionIconsContainerMobile,
  ActionIconsContainerPC,
} from "../../styles/theme/navbar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { ListItemButton, ListItemIcon, Badge, Divider } from "@mui/material";

export const Actions = ({ res }) => {
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
            <Badge badgeContent={17} color="error">
              <ShoppingCartIcon />
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
