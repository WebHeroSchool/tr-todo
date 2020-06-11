import React from "react";
import TextField from '@material-ui/core/TextField';

const InputItem = () => (
  <div>
  <TextField
    label="Введите новое дело"
    id="outlined-margin-none"
    defaultValue=""
    variant="outlined"
  />
  </div>
);

export default InputItem;