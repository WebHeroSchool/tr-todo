import React from "react";
import './Item.css'

const Item = ({item}) => (
  <li className="list__item">{item.value}</li>
)

export default Item;