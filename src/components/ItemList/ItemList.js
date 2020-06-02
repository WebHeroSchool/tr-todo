import React from "react";
import Item from '../Item/Item';

const ItemList = ({todos}) => (
  <ul>
    { todos.map( todo =><Item todo={todo}/>) }
  </ul>
);



export default ItemList;