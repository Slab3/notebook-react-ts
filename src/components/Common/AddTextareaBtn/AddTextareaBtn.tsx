import React from 'react';
import styles from './AddTextareaBtn.module.scss';

export default function AddTextareaBtn({ createItem }: any) {
  return (
      <div
          className={styles.blockAddArea}
          // onClick={() => console.log("addTextarea")}
          onClick={() => {
            createItem({
              id: '',
              title: '',
              description: '',
            })
          }}
      >
        <button className={styles.addTextarea}>+</button>
      </div>
  )
}