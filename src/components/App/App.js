import React from "react";
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import './App.css'


const App = () => {

  const items = [
    {value: 'Первое дело'},
    {value: 'Другое дело'},
    {value: 'Важное дело'}
  ];

  return (<div className="wrap">
    <h1 className="wrap__title">Список дел</h1>
    <InputItem/>
    <ItemList items={items}/>
    <Footer count={2}/>
  </div>);
}

export default App;