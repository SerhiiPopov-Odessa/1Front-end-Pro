import { Outlet } from "react-router-dom";
import {
  createTheme,
  Container,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import Header from "../Header/Header";
import { orange } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
  },
});

const Layout = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Header />
    <Container component='main' sx={{ marginTop: "20px" }}>
      <Outlet />
    </Container>
  </ThemeProvider>
);

export default Layout;
