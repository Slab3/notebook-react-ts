import React from 'react';
import styles from './DateField.module.scss';

export default function DateField() {
  let now = new Date().toLocaleString();
  return (
      <div className={styles.dateBlock}>
          <span className={styles.dateField}>
            {now}
          </span>
      </div>
  )
}