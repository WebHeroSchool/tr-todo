import React, {useEffect, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import styles from './InputItem.module.css';

const InputItem = ({onClickAdd}) => {
  const inputState = {
    inputValue: '',
    error: false,
    helperText: ''
  };
  
  const [inputValue, setInputValue] = useState(inputState.inputValue);
  const [error, setError] = useState(inputState.error);
  const [helperText, setHelperText] = useState(inputState.helperText);
  
  const onAddClick = () => {
    if (inputValue.length > 0) {
      const newInputValue = '';
      setInputValue(newInputValue);
      onClickAdd(inputValue);
    } else {
      const newHelperText = 'Поле не должно быть пустым!';
      const newError = true;
      setHelperText(newHelperText);
      setError(newError);
      }
  };
  
  return (
    <form className={styles.inputWrap}>
      <TextField
        className={styles.inputField}
        label='Введите новое дело'
        id='outlined-margin-none'
        variant='outlined'
        error={error}
        helperText={helperText}
        multiline
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value.toUpperCase());
          setHelperText('');
          setError(false);
          }
        }
      />
      <Fab
        size='medium'
        color='primary'
        aria-label='add'
        onClick={onAddClick}
      >
        <AddIcon />
      </Fab>
    </form>
  );
}

export default InputItem;
