import React, {useState} from 'react';
import styles from './BtnAddNote.module.scss';
import {NoteWrapper} from '../../index';
import ReactDOM from 'react-dom';
// import '../../../styles/main.scss';

export default function BtnAddNote() {
  const [counter, setCounter] = useState(0);

  return (
      <div className={styles.addItem} data-item-counter={counter} id="addItem" onClick={() => {setCounter(counter + 1); console.log(counter)}}>
        <p className={styles.plus}>+</p>
        <p>Add New</p>
      </div>
  )
}

//
// function renderNote() {
//   const element = (NoteWrapper());
//   ReactDOM.render(element, document.getElementById('notes'));
// }