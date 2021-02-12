import React from 'react';
import styles from './BtnAddNote.module.scss';
import {NoteWrapper} from "../../index";
// import '../../../styles/main.scss';

export default function BtnAddNote() {
  return (
      <div className={styles.addItem} id="addItem" onClick={() => NoteWrapper()}>
        <p className={styles.plus}>+</p>
        <p>Add New</p>
      </div>
  )
}