import React, {useContext, useState} from "react";
import styles from "./NoteTitle.module.scss";
// import {NoteContext} from "../../../NoteContext";
import {Notes, useUpdateNote} from "../../../context/notes";
import {Item} from "../../../types/item";

interface INoteTitle {
  onChange: (title: Item) => void;
}

export default function NoteTitle({ onChange }: INoteTitle) {
  const updateNote = useUpdateNote();
  const { notes } = useContext(Notes); // using context


  // const { updateItem } = useContext(NoteContext);

  return (
    <span className={styles.title}>
      <textarea
        className={styles.titleInput}
        placeholder="Title"
        maxLength={50}
        onChange={() => {
          updateNote({
            id: '',
          }, {
            note: ''
          });
        }}
      >
      </textarea>
    </span>
  )
}