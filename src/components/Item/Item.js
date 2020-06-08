import React from "react";
import styles from './Item.module.css';

const Item = ({item}) => (
  <li className={styles.item}>{item.value}</li>
)

export default Item;