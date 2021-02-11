import React from 'react';
import styles from "./ItemText.module.scss";

export default function ItemText() {
  return (
      <textarea className={styles.listItemInput} placeholder="Add note" maxLength={2000}>
      </textarea>
  )
}