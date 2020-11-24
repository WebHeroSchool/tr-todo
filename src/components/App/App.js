import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import styles from './App.module.css';

import Card from '@material-ui/core/Card';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

import Todo from '../Todo/Todo';
import About from '../About/About';
import Contacts from '../Contacts/Contact';

const App = () =>
  (<Router>
    <div className={styles.wrap}>
      <Card className={styles.menu}>
        <MenuList>
          <Link to='/' className={styles.link}><MenuItem>Обо мне</MenuItem></Link>
          <Link to='/Todo' className={styles.link}><MenuItem>Дела</MenuItem></Link>
          <Link to='/Contacts' className={styles.link}><MenuItem>Контакты</MenuItem></Link>
        </MenuList>
      </Card>

      <Card className={styles.content}>
        <Route path='/' exact component={About} />
        <Route path='/Todo' component={Todo} />
        <Route path='/Contacts' component={Contacts} />
      </Card>
    </div>
  </Router>);

export default App;
