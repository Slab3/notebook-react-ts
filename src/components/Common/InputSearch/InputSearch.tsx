import React from 'react';
import styles from './InputSearch.module.scss';

interface IFilterNotes {
  search: string
  onSearchChange(event: React.ChangeEvent<HTMLInputElement>): void

}

export default function Search( { search, onSearchChange }: IFilterNotes ) {
  return (
    <div className={styles.searchField}>
      <input
        id="search"
        type="text"
        autoComplete="off"
        className={styles.title}
        placeholder="Take a note..."
        value={search}
        onChange={onSearchChange}
      />
      <label htmlFor={search} className={styles.labelActive}>
        Search
      </label>
    </div>
  )
}
