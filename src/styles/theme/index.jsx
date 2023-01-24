import { createTheme } from "@mui/material/styles";
import { lighten } from "polished";

const theme = createTheme({
  palette: {
    primary: {
      main: "#62ACB5",
    },
    secondary: {
      main: "#5AA6A6",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: 250,
          background: "#72979C",
          color: "#DEFCFB",
          borderRadius: "0px 80px 0px 0px",
          borderRight: "1px solid #168375",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: lighten(0.2, "#72979C"),
        },
      },
    },
    MyShopButton: {
      styleOverrides: {
        root: {
          color: "#2F7B8A",
        },
        primary: {
          backgound: "#A8694C",
          "&:hover": {
            backgound: lighten(0.05, "#A8694C"),
          },
        },
        secondary: {
          backgound: "#A8694C",
          "&:hover": {
            backgound: lighten(0.05, "#A8694C"),
          },
        },
      },
    },
  },
});

export default theme;
