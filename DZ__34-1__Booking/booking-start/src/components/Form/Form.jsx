import { useEffect } from 'react';
import { Field, Form } from "react-final-form";
import { Box, Grid } from "@mui/material";
import Button from "../Button/Button.jsx";
import Select from "../Select/Select.jsx";
import { Input } from "../Input/Input.jsx";
import DatePicker from "../Datepicker/Datepicker.jsx";
import { useDispatch, useSelector } from "react-redux";
import destinationsAsyncAction from "../../redux/destination/saga/asyncActions.js";
import hotelsAsyncAction from '../../redux/hotels/saga/asyncActions.js'
import destinationsSelector from "../../redux/destination/selectors.js";

const BookingForm = () => {
  const dispatch = useDispatch();
  const pending = useSelector(destinationsSelector.loading);
  const destinations = useSelector(destinationsSelector.items);
  console.log('destinations:', destinations); 

  useEffect(() => {
    dispatch(destinationsAsyncAction.getDestinationAction());
  }, [dispatch]);

  const onSubmit = (values) => {
    console.log(values);
    dispatch(hotelsAsyncAction.getHotelsAction(values));
  };
  //const pending = false;
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => {
        return (
          <Box
            sx={{ display: "flex", margin: "30px 0" }}
            component='form'
            onSubmit={handleSubmit}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} lg={3}>
                <Field
                  name='destination'
                  label='Destination'
                  component={Select}
                  disabled={pending}
                  options={destinations}
                  /* options={[
                    {
                      id: 1,
                      value: 70,
                      label: "Atlanta",
                    },
                    {
                      id: 2,
                      value: 149,
                      label: "Boston",
                    },
                    {
                      id: 3,
                      value: 5034,
                      label: "Boston",
                    },
                  ]} */
                />
              </Grid>
              <Grid item xs={12} lg={3}>
                <Field
                  name='check_in'
                  label='Check in'
                  component={DatePicker}
                  fullWidth
                  type='number'
                  disabled={pending}
                />
              </Grid>
              <Grid item xs={12} lg={3}>
                <Field
                  name='check_out'
                  label='Check out'
                  component={DatePicker}
                  fullWidth
                  type='number'
                  disabled={pending}
                />
              </Grid>
              <Grid item xs={6} lg={1}>
                <Field
                  name='adult'
                  label='Adult'
                  component={Input}
                  fullWidth
                  type='number'
                  disabled={pending}
                />
              </Grid>
              <Grid item xs={6} lg={1}>
                <Field
                  name='children'
                  label='Children'
                  component={Input}
                  type='number'
                  fullWidth
                  disabled={pending}
                />
              </Grid>
              <Grid item xs={12} lg={1}>
                <Button
                  loading={pending}
                  type='submit'
                  sx={{ width: "100%", height: "57px" }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Box>
        );
      }}
    />
  );
};

export default BookingForm;
