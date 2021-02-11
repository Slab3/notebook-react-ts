import React from 'react';
import styles from './AddTextareaBtn.module.scss';

export default function AddTextareaBtn() {
  return (
      <div className={styles.blockAddArea}>
        <button className={styles.addTextarea}>+</button>
      </div>
  )
}