import React, {useContext, useState} from 'react';
import styles from './DeleteBtn.module.scss';
// import notes, {useDeleteNote} from "../../../context/notes";
import {Notes, useDeleteNote} from "../../../context/notes";
import {Item} from "../../../types/item";

interface INoteRemove {
  onClick: (note: Item) => void;
}

function DeleteBtn({ onClick }: INoteRemove) {
  const deleteNote = useDeleteNote();
  const { notes } = useContext(Notes); // using context

  return (
      <div className={styles.deleteBlock}
           onClick={() => {
             deleteNote({
               id: '',
             }, {
               note: '',
             });
           }}
      >
        <span className={styles.deleteItem}>Х</span>
      </div>
  )
}

export default DeleteBtn;