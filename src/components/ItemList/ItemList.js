import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';

const ItemList = ({ items, onClickDone, onClickDelete }) => (
  <ul className={styles.list}>
    {items.map((item) => (
      <Item
        value={item.value}
        isDone={item.isDone}
        id={item.id}
        key={item.id}
        onClickDone={onClickDone}
        onClickDelete={onClickDelete}
      />
    ))}
  </ul>
);

ItemList.defaultProps = {
  items: [{
    isDone: false,
  }]
};

export default ItemList;
