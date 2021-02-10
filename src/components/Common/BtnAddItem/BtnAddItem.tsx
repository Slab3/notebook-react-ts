import React from 'react';
import styles from './BtnAddItem.module.scss';
// import '../../../styles/main.scss';

export default function BtnAddItem() {
  return (
      <div className={styles.addItem} id="addItem">
        <p className={styles.plus}>+</p>
        <p>Add New</p>
      </div>
  )
}