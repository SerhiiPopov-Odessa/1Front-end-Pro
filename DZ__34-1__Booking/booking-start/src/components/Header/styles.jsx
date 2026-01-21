import {Box, styled} from "@mui/material";

export const Wrapper = styled(Box)({
  display: 'flex',
  paddingTop: '20px',
  paddingBottom: '20px',
  paddingLeft: '24px',
  paddingRight: '24px',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '1px solid orange'
})

export const Icon = styled(Box)(({theme}) => ({
  width: '50px',
  height: '50px',
  marginRight: '10px',
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main
}))
