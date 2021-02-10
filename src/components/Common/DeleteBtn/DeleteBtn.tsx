import React from 'react';
import styles from './DeleteBtn.module.scss';


function DeleteBtn() {
  return (
      <div className={styles.deleteBlock}>
        <span className={styles.deleteItem}>Х</span>
      </div>
  )
}

export default DeleteBtn;