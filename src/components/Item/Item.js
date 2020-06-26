import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import classnames from 'classnames';
import styles from './Item.module.css';

const Item = ({item, isDone}) => (
  <li className={
    classnames({
      [styles.item]: true,
      [styles.done]: isDone,
    })
  }>
    <Checkbox color="primary" />
    <span className={styles.itemText}>{item.value}</span>
    <IconButton aria-label='delete'>
      <DeleteIcon />
    </IconButton>
  </li>)

export default Item;