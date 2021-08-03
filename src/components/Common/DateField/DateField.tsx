import React from 'react';
import styles from './DateField.module.scss';

interface ITime {
  time: string;
}

export default function DateField({time}: ITime) {
  return (
      <div className={styles.dateBlock}>
          <span className={styles.dateField}>
            {time}
          </span>
      </div>
  )
}

