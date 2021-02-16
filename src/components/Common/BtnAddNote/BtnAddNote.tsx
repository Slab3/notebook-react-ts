import React, {useState} from 'react';
import styles from './BtnAddNote.module.scss';

export default function BtnAddNote({ createNote }: any) {
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
            });
            setCounter(counter+1)
          }}
      >
        <p className={styles.plus}>+</p>
        <p>Add New</p>
      </div>
  )
}

