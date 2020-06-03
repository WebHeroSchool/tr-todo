import React from "react";
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';


const todos = [
  'Первое дело',
  'Другое дело',
  'Важное дело',
]

const App = () => (<div>
  <h1>Список дел</h1>
  <InputItem/>
  <ItemList todos={todos}/>
  <Footer count={2} />
</div>);


export default App;