import React from 'react';
import styles from './InputSearch.module.scss';

export default function Search() {
  return (
      <div className={styles.searchField}>
        <input id="search" type="text" autoComplete="off" placeholder="Take a note..."/>
      </div>
  )
}