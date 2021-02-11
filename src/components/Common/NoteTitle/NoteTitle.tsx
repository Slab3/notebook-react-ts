import React from "react";
import styles from './NoteTitle.module.scss';


export default function NoteTitle() {
  return (
    <span className={styles.title}>
      <textarea className={styles.titleInput} placeholder="Title" maxLength={50}>
      </textarea>
    </span>
  )
}