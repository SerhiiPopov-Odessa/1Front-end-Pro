import { Wrapper } from "./styles.jsx";
import { routes } from "../../constants/routes.jsx";
import { Icon } from "../Header/styles.jsx";

const Logo = () => {
  return (
    <Wrapper to={routes.main.path}>
      <Icon />
      Booking
    </Wrapper>
  );
};

export default Logo;
