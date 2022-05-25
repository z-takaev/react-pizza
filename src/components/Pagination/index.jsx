import React from 'react';
import styles from './Pagination.module.scss';

export const Pagination = ({ pages, currentPage, setCurrentPage }) => {
  const next = () => {
    if (currentPage < pages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <ul className={styles.root}>
      <li className={styles.item} onClick={() => prev()}>
        &#60;
      </li>

      {[...new Array(pages)].map((_, index) => (
        <li
          className={`${styles.item} ${currentPage === index + 1 && styles.active}`}
          key={index}
          onClick={() => setCurrentPage(index + 1)}>
          {index + 1}
        </li>
      ))}

      <li className={styles.item} onClick={() => next()}>
        &#62;
      </li>
    </ul>
  );
};

export default Pagination;
