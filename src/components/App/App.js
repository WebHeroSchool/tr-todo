import React from 'react';
import Card from '@material-ui/core/Card';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Todo from '../Todo/Todo'
import styles from './App.module.css';

const App = () =>
  (<div className={styles.wrap}>
    <Card className={styles.menu}>
    <MenuList>
      <MenuItem>Обо мне</MenuItem>
      <MenuItem>Дела</MenuItem>
      <MenuItem>Контакты</MenuItem>
    </MenuList>
    </Card>

    <Card className={styles.content}>
      <Todo/>
    </Card>
  </div>);

export default App;
