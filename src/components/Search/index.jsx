import React from 'react';
import styles from './Search.module.scss';

function Search() {
  return (
    <div className={styles.root}>
      <input className={styles.input} type="text" placeholder="Поиск..." />
    </div>
  );
}

export default Search;
