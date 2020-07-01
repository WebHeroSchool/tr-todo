import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';

const ItemList = ({items}) => (
  <ul className={styles.list}>
    { items.map( item =><Item item={item} isDone={item.isDone} key={item.value}/>) }
  </ul>);



export default ItemList;
