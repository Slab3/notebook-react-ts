import React, {useContext, useState} from 'react';
import styles from './DeleteBtn.module.scss';
// import notes, {useDeleteNote} from "../../../context/notes";
import {Notes, useDeleteNote} from "../../../context/notes";
import {Item} from "../../../types/item";

interface INoteRemove {
  onClick: () => void;
}

function DeleteBtn({ onClick }: INoteRemove) {
  return (
      <div className={styles.deleteBlock}
           onClick={() => {
             onClick();
           }}
      >
        <span className={styles.deleteItem}>Х</span>
      </div>
  )
}

export default DeleteBtn;