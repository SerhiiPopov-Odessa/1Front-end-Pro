import { LinkWrapper } from "./styles.jsx";
import { LoadingButton } from "@mui/lab";
import { Button as ButtonMUI } from "@mui/material";

const Button = (props) => {
  const {
    reactHref,
    children,
    color = "#fff",
    type = "button",
    disabled,
    loading,
    sx,
  } = props;
  if (loading) {
    return (
      <LoadingButton variant='outlined' loading sx={sx}>
        {children}
      </LoadingButton>
    );
  }
  return (
    <ButtonMUI
      disabled={disabled}
      type={type}
      sx={{ color, ...sx }}
      variant='contained'
    >
      {reactHref ? (
        <LinkWrapper to={reactHref}>{children}</LinkWrapper>
      ) : (
        children
      )}
    </ButtonMUI>
  );
};

export default Button;
