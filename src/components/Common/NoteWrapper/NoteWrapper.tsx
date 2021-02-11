import React from 'react';
import styles from './NoteWrapper.module.scss';
import '../../../styles/main.scss';
import { DeleteBtn, NoteTitle, BodyNoteText, AddTextareaBtn, DateField } from '../../index';


export default function NoteWrapper() {
  return (
      <div className={styles.noteItem}>
        <DeleteBtn/>
        <NoteTitle/>
        <BodyNoteText/>
        <AddTextareaBtn/>
        <DateField/>
      </div>
  )
}
