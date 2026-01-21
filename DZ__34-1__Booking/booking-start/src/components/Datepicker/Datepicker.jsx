import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker as DatePickerMUI } from "@mui/x-date-pickers/DatePicker";

const DatePicker = (props) => {
  const {
    label,
    disabled,
    input: { onChange, value },
    fullWidth,
  } = props;
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePickerMUI
        label={label}
        disabled={disabled}
        onChange={onChange}
        value={value || null}
        slotProps={{ textField: { fullWidth } }}
      />
    </LocalizationProvider>
  );
}

export default DatePicker;
