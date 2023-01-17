import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { AppRouter } from "./AppRouter";
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
        <AppRouter />
      </Container>
    </ThemeProvider>
  );
}

export default App;
