import React from 'react';
import styles from './NewItemBtn.module.scss';
import '../../../styles/main.scss';

export default function NewItemBtn() {
  return (
      <div className={styles.addItem} id="addItem">
        <p className={styles.plus}>+</p>
        <p>Add New</p>
      </div>
  )
}