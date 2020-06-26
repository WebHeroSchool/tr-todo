import React from "react";
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from "@material-ui/icons/Add";
import styles from './InputItem.module.css';

const InputItem = () => (
  <div className={styles.inputWrap}>
  <TextField
    className={styles.inputField}
    label="Введите новое дело"
    id="outlined-margin-none"
    defaultValue=""
    variant="outlined"
    multiline
  />
    <Fab size="medium" color="primary" aria-label="add">
      <AddIcon />
    </Fab>
  </div>
);

export default InputItem;