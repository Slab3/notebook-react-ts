import React from 'react';
import styles from './DateField.module.scss';

export default function DateField() {
  return (
      <div className={styles.dateBlock}>
          <span className={styles.dateField}>
            10.02.2021, 15:27:41
          </span>
      </div>
  )
}