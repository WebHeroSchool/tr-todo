import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';


class App extends React.Component {
  state = {
    items: [
      {
        id: 1,
        value: 'Первое дело',
        isDone: false,
      },
      {
        id: 2,
        value: 'Другое дело',
        isDone: false,
      },
      {
        id: 3,
        value: 'Важное дело',
        isDone: false,
      }
    ]
  };

  onClickDone = (id) => {
    const newItemList = this.state.items.map((item) => {
      const newItem = { ...item };

      if ( newItem.id === id) {
        newItem.isDone = !newItem.isDone;
      }

      return newItem;
    });

    this.setState({items: newItemList});
  };

  onClickDelete = (id) => {
    const index = this.state.items.findIndex((elem) => {
      return elem.id === id;
    });
    const newItemList = this.state.items;
    newItemList.splice(index, 1);
    this.setState({items: newItemList});

  };

  render() {
    return (<div className={styles.wrap}>
      <h1 className={styles.title}>Список дел</h1>
      <InputItem/>
      <ItemList
        items={this.state.items}
        onClickDone={this.onClickDone}
        onClickDelete={this.onClickDelete}
      />
      <Footer count={2}/>
    </div>);
  }
}

export default App;