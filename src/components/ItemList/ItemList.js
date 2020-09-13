import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';

const ItemList = ({items, onClickDone, onClickDelete}) => (
  <ul className={styles.list}>
    { items.map( (item) => <Item
      item={item}
      isDone={item.isDone}
      id={item.id}
      key={item.id}
      onClickDone={onClickDone}
      onClickDelete={onClickDelete}
      />)
    }
  </ul>
);

ItemList.defaultProps = {
  items: [{
    value: 'Нет дел',
    isDone: false,
  }]
};

export default ItemList;
