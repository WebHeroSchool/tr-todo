import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';

const ItemList = ({items, onClickDone}) => (
  <ul className={styles.list}>
    { items.map( (item) => <Item item={item} isDone={item.isDone} key={item.value} onClickDone={onClickDone}/>) }
  </ul>
);



export default ItemList;
