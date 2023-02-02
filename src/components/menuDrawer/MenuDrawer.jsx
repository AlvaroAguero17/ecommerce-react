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
import { Link } from "react-router-dom";

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
            <ListItemText>
              <Link to="/" className="links drawer">
                Home
              </Link>
            </ListItemText>
          </ListItemButton>
          <Divider variant="middle" />
          <ListItemButton>
            <ListItemText>
              <Link to="/" className="links drawer">
                Categories
              </Link>
            </ListItemText>
          </ListItemButton>
          <Divider variant="middle" />
          <ListItemButton>
            <ListItemText>
              <Link to="/" className="links drawer">
                Products
              </Link>
            </ListItemText>
          </ListItemButton>
          <Divider variant="middle" />
          <ListItemButton>
            <ListItemText>
              <Link to="/" className="links drawer">
                Contact us
              </Link>
            </ListItemText>
          </ListItemButton>
        </List>
      </Drawer>
    </>
  );
}
