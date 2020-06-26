import React from 'react';
import styles from './Footer.module.css';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const Footer = ({ count }) => (<footer className={styles.footer}>
  <p className={styles.unfinishedDeal}> Не выполнено дел: {count} </p>
  <ButtonGroup className={styles.filterButton} aria-label="outlined secondary button group">
    <Button>все</Button>
    <Button>активные</Button>
    <Button>выполненные</Button>
  </ButtonGroup>
  <Button
    className={styles.allDelButton}
    variant="contained"
    color="secondary"
    startIcon={<DeleteIcon />}
  >
    Удалить выполненные дела
  </Button>
</footer>);

export default Footer;