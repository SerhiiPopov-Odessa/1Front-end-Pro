import { TextField } from "@mui/material";

export function Input(props) {
  const {
    meta,
    input: { value, onChange, type },
    disabled,
    label,
    fullWidth,
  } = props;
  const error = meta.touched && meta.error;
  return (
    <TextField
      fullWidth={fullWidth}
      error={error}
      helperText={error}
      value={value}
      onChange={onChange}
      disabled={disabled}
      type={type}
      label={label}
    />
  );
}
