import React, {useContext, useState} from 'react';
import styles from './BtnAddNote.module.scss';
import {NoteContext} from "../../../NoteContext";

export default function BtnAddNote({ createNote }: any) {
  const [counter, setCounter] = useState(0);

  const {value, setValue} = useContext(NoteContext);

  return (
      <div
          className={styles.addItem}
          data-item-counter={counter}
          id="addItem"
          onClick={() => {
            createNote({
              id: '',
              title: '',
              description: '',
              time: Date().toLocaleString(),
            });
            setCounter(counter+1)
          }}
      >
        <p className={styles.plus}>+</p>
        <p>Add New</p>
        <div>{value}</div> {/*context using test*/}
        <button onClick={() => setValue("nice value!")}>change value</button>
      </div>
  )
}

