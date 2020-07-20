import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';


class App extends React.Component {
  state = {
    items: [
      {
        value: 'Первое дело',
        isDone: true,
      },
      {
        value: 'Другое дело',
        isDone: false,
      },
      {
        value: 'Важное дело',
        isDone: true,
      }
    ]
  };

  onClickDone = isDone => {
    console.log(isDone)
  };

  render() {
    return (<div className={styles.wrap}>
      <h1 className={styles.title}>Список дел</h1>
      <InputItem/>
      <ItemList items={this.state.items} onClickDone={this.onClickDone}/>
      <Footer count={2}/>
    </div>);
  }
}

export default App;