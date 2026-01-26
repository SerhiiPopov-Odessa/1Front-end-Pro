import { useQuery } from '@tanstack/react-query'
import { Field, Form } from "react-final-form";
import { Box, Grid } from "@mui/material";
import Button from "../Button/Button.jsx";
import Select from "../Select/Select.jsx";
import { Input } from "../Input/Input.jsx";
import DatePicker from "../Datepicker/Datepicker.jsx";
import { useDispatch } from "react-redux";
import hotelsAsyncAction from '../../redux/hotels/saga/asyncActions.js'
import api from "../../api/axiosApi.js";

const BookingForm = () => {
  const dispatch = useDispatch();

  const {
    data: destinations = [],
    isLoading: pending,
    isError,
  } = useQuery({
    queryKey: ['destinations'],
    queryFn: api.getDestination,
    staleTime: 1000 * 60 * 10, // 10 минут данные свежие
    cacheTime: 1000 * 60 * 30, // 30 минут живут в кеше
  });

  const onSubmit = (values) => {
    console.log(values);
    dispatch(hotelsAsyncAction.getHotelsAction(values));
  };

  if (isError) {
    return <div>Ошибка загрузки направлений</div>;
  }
  
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
                    "id": 1,
                    "value": 1,
                    "label": "Київ"
                  },
                  {
                    "id": 2,
                    "value": 2,
                    "label": "Вінниця"
                  },
                  {
                    "id": 3,
                    "value": 3,
                    "label": "Луцьк"
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
