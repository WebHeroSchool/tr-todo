import React from "react";
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';


const App = () => {

  const items = [
    {value: 'Первое дело'},
    {value: 'Другое дело'},
    {value: 'Важное дело'}
  ];

  return (<div>
    <h1>Список дел</h1>
    <InputItem/>
    <ItemList items={items}/>
    <Footer count={2}/>
  </div>);
}

export default App;