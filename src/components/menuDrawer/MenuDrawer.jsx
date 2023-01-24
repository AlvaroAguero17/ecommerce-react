import {
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../context/AppProvider";
import { DrawerCloseButton } from "../../styles/theme/navbar";
import CloseIcon from "@mui/icons-material/Close";
import { lighten } from "polished";

export default function MenuDrawer() {
  const { drawerOpen, setDrawerOpen } = useContext(AppContext);

  return (
    <>
      {drawerOpen && (
        <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
          <CloseIcon
            sx={{
              fontSize: "2.5rem",
              color: lighten(0.09, "#fff"),
            }}
          />
        </DrawerCloseButton>
      )}
      <Drawer open={drawerOpen}>
        <List>
          <ListItemButton>
            <ListItemText>Home</ListItemText>
          </ListItemButton>
          <Divider variant="middle" />
          <ListItemButton>
            <ListItemText>Categories</ListItemText>
          </ListItemButton>
          <Divider variant="middle" />
          <ListItemButton>
            <ListItemText>Products</ListItemText>
          </ListItemButton>
          <Divider variant="middle" />
          <ListItemButton>
            <ListItemText>Contact us</ListItemText>
          </ListItemButton>
        </List>
      </Drawer>
    </>
  );
}
