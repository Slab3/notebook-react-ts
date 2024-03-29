import React from 'react';
import styles from './AddTextareaBtn.module.scss';

export default function AddTextareaBtn({ createItem }: any) {
  return (
      <div
          className={styles.blockAddArea}
          onClick={() => {
            createItem({
              id: '',
              checkbox: '', // there must be status, as i see in "NoteWrapper"
              description: '',
              value: '',
            })
          }}
      >
        <button className={styles.addTextarea}>+</button>
      </div>
  )
}

