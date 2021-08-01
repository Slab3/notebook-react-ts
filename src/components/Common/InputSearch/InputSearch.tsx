import React, {useEffect} from 'react';
import styles from './InputSearch.module.scss';

interface IFilterNotes {
  search: string
  onSearchChange(event: React.ChangeEvent): void
  setSearch: React.Dispatch<React.SetStateAction<string>>

}

export default function Search( { search, onSearchChange, setSearch }: IFilterNotes ) {

  useEffect(()=> {
    const saved = JSON.parse(localStorage.getItem("search") || "") as string;
    setSearch(saved);
  }, []);

  useEffect(()=> {
    localStorage.setItem("search", JSON.stringify(search));
  },[search]);

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
