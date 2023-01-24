import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { AppRouter } from "./AppRouter";
import Footer from "./components/footer/Footer";
import MenuDrawer from "./components/menuDrawer/MenuDrawer";
import Search from "./components/search/Search";
import { AppProvider } from "./context/AppProvider";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xl"
        sx={{
          background: "#fff",
        }}
      >
        <AppProvider>
          <AppRouter />
          <Footer />
          <MenuDrawer />
          <Search />
        </AppProvider>
      </Container>
    </ThemeProvider>
  );
}

export default App;
