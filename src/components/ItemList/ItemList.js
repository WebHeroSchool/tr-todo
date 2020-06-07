import React from "react";
import Item from '../Item/Item';

const ItemList = ({items}) => (
  <ul>
    { items.map( item =><Item item={item} key={item.value}/>) }
  </ul>
);



export default ItemList;