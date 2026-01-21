import { Box, Typography } from "@mui/material";
import BookingForm from "../../components/Form/Form";

const Main = () => (
  <>
    <BookingForm />
    <Box
      component='h6'
      sx={{ fontSize: "40px", lineHeight: 1, marginBottom: 2 }}
    >
      Travel With{" "}
      <Box component='span' sx={{ color: "primary.main" }}>
        Booking
      </Box>
    </Box>
    <Typography component='p'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Typography>
  </>
);

export default Main;
