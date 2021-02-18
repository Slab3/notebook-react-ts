import React, { useState } from 'react';
import styles from './BtnAddNote.module.scss';
import { useCreateNote } from "../../../context/notes";

export default function BtnAddNote() {
  const createNote = useCreateNote();
  const [counter, setCounter] = useState(0);

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

      </div>
  )
}

