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
      },
    ],
     count: 3
  };

  onClickAdd = (value, isDone) =>
    this.setState((state) => ({
      items: [
        ...state.items,
        {
          value,
          isDone,
          id: state.count + 1,
        },
      ],
      count: state.count + 1,
    }));

  onClickDone = (id) => {
    const newItemList = this.state.items.map((item) => {
      const newItem = { ...item };

      if (newItem.id === id) {
        newItem.isDone = !newItem.isDone;
      }

      return newItem;
    });

    this.setState({ items: newItemList });
  };

  onClickDelete = (id) => {
    const index = this.state.items.findIndex((elem) => {
      return elem.id === id;
    });
    const newItemList = this.state.items;
    let newCount = this.state.count;
    newItemList.splice(index, 1);
    newCount--;
    this.setState({
      items: newItemList,
      count: newCount,
    });
  };

  render() {
    return (
      <div className={styles.wrap}>
        <h1 className={styles.title}>Список дел</h1>
        <InputItem onClickAdd={this.onClickAdd} />
        <ItemList
          items={this.state.items}
          onClickDone={this.onClickDone}
          onClickDelete={this.onClickDelete}
        />
        <Footer count={this.state.count} />
      </div>
    );
  }
}

export default App;
