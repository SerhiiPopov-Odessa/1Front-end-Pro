import {
  FormControl,
  InputLabel,
  Select as SelectMUI,
  MenuItem,
} from "@mui/material";

const Select = (props) => {
  const {
    options,
    label,
    input: { onChange, value },
    disabled,
  } = props;
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <SelectMUI
        label={label}
        onChange={onChange}
        value={value}
        disabled={disabled}
      >
        {options.map((item) => (
          <MenuItem key={item.id} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </SelectMUI>
    </FormControl>
  );
}

export default Select;
