import React, {useContext} from 'react';
import styles from "./BodyNoteText.module.scss";
import {NoteContext} from "../../../NoteContext";
import {Item} from "../../../types/item";
import {Notes, useUpdateNote} from "../../../context/notes";

interface IBodyNoteText {
  onChange: (description: Item) => void;
}

export default function BodyNoteText({ onChange }: IBodyNoteText) {
  const updateNote = useUpdateNote();
  const {notes} = useContext(Notes); // using context


  return (
    <div className="body">
      <div className="checkbox-N-Text">
        <input type="checkbox"/>
        {/*try map here*/}
        <textarea
          className={styles.listItemInput}
          placeholder="Add note"
          maxLength={2000}
          onChange={() => {
            updateNote({
              id: '',
            }, {
              note: ''
            });
          }}
        >
          </textarea>
      </div>
    </div>
  )
}