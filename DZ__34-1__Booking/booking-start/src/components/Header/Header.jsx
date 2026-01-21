import { Wrapper } from "./styles.jsx";
import Logo from "../Logo/Logo.jsx";
import { Stack } from "@mui/material";
import Button from "../Button/Button.jsx";
import { routes } from "../../constants/routes.jsx";

const Header = () => (
  <Wrapper component='header'>
    <Logo />
    <Stack spacing={2} direction='row'>
      <Button reactHref={routes.main.path}>Main</Button>
      <Button reactHref={routes.about.path}>About</Button>
    </Stack>
  </Wrapper>
);

export default Header;
