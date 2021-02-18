import React from 'react';
import styles from './DeleteBtn.module.scss';


function DeleteBtn({ handleRemoveNote }: any) {
  return (
      <div className={styles.deleteBlock}
           onClick={() => {
             handleRemoveNote({
               id: '',
             });
           }}
      >
        <span className={styles.deleteItem}>Х</span>
      </div>
  )
}

export default DeleteBtn;