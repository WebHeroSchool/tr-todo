import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import classnames from 'classnames';
import styles from './Item.module.css';

class Item extends React.Component {
  
  componentDidMount() {
    this.idInterval = setInterval(() => { 
      console.log('leak memory');
    }, 1000);
  }
  

  componentWillUnmount() {
    clearInterval(this.idInterval);
  }
  
  render () {
  
    const {value, isDone, id, onClickDone, onClickDelete} = this.props;
    return (
      <li
        className={classnames({
          [styles.item]: true,
          [styles.done]: isDone,
        })}
      >
    <span className={styles.itemText} onClick={() => onClickDone(id)}>
      <Checkbox color='primary' checked={isDone}/>
      {value}
    </span>
        <IconButton aria-label='delete' onClick={() => onClickDelete(id)}>
          <DeleteIcon/>
        </IconButton>
      </li>
    );
  }
}

Item.defaultProps = {
  value: 'Нет дел',
  isDone: false,
};

Item.propTypes = {
  value: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired
};

export default Item;
