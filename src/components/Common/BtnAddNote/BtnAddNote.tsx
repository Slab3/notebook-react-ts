import React, {useState} from 'react';
import styles from './BtnAddNote.module.scss';

// import ReactDOM from 'react-dom';
// import '../../../styles/main.scss';

export default function BtnAddNote({ createNote }: any) {
  const [counter, setCounter] = useState(0);

  return (
      <div className={styles.addItem} data-item-counter={counter} id="addItem" onClick={() => {createNote()}}>
        <p className={styles.plus}>+</p>
        <p>Add New</p>
      </div>
  )
}

