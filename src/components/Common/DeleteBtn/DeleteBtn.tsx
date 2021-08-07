import React from 'react';
import styles from './DeleteBtn.module.scss';

interface INoteRemove {
  onClick: () => void;
}

export default function DeleteBtn({ onClick }: INoteRemove) {
  return (
      <div className={styles.deleteBlock}
           onClick={() => onClick()}
      >
        <span className={styles.deleteItem}>×</span>
      </div>
  )
}
