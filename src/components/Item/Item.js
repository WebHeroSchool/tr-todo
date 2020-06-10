import React from "react";
import classnames from 'classnames';
import styles from './Item.module.css';

const Item = ({item, isDone}) => (
  <li className={
    classnames({
      [styles.item]: true,
      [styles.done]: isDone,
    })
  }>{item.value}</li>
)

export default Item;