import React from 'react';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import styles from './InputItem.module.css';

class InputItem extends React.Component {
  state = {
    inputValue: '',
    error: false,
    helperText: ''
  };

  onAddClick = () => {
    if (this.state.inputValue.length > 0) {
      this.setState(
        {inputValue: ''}
      );
      this.props.onClickAdd(this.state.inputValue);
    } else {
      this.setState(
        {
          helperText: 'Поле не должно быть пустым!',
          error: true
        }
      );
    }
  }

  render() {

    return (
      <form className={styles.inputWrap}>
        <TextField
          className={styles.inputField}
          label='Введите новое дело'
          id='outlined-margin-none'
          variant='outlined'
          error={this.state.error}
          helperText={this.state.helperText}
          multiline
          value={this.state.inputValue}
          onChange={(event) => this.setState({
            inputValue: event.target.value.toUpperCase(),
            helperText: '',
            error: false
          })}
        />
        <Fab
          size='medium'
          color='primary'
          aria-label='add'
          onClick={this.onAddClick}
        >
          <AddIcon />
        </Fab>
      </form>
    );
  }
}

export default InputItem;
