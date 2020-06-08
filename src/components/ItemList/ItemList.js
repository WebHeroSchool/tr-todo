import React from "react";
import Item from '../Item/Item';
import './ItemList.css'

const ItemList = ({items}) => (
  <ul className="list">
    { items.map( item =><Item item={item} key={item.value}/>) }
  </ul>
);



export default ItemList;