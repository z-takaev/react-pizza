import React from 'react';
import styles from './Search.module.scss';

import { SearchContext } from '../../App';

function Search() {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);

  return (
    <div className={styles.root}>
      <svg className={styles.searchIcon} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
      </svg>
      <input
        className={styles.input}
        type="text"
        placeholder="Поиск..."
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      {searchValue && (
        <svg
          className={styles.searchClose}
          onClick={() => setSearchValue('')}
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z" />
          <path d="M0 0h48v48h-48z" fill="none" />
        </svg>
      )}
    </div>
  );
}

export default Search;
