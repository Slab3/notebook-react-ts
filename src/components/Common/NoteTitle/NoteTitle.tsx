import React, {useContext} from "react";
import styles from "./NoteTitle.module.scss";
import {NoteContext} from "../../../NoteContext";
import {Item} from "../../../types/item";


export default function NoteTitle(item: Item) {
  const { updateItem } = useContext(NoteContext);

  return (
    <span className={styles.title}>
      <textarea
        className={styles.titleInput}
        placeholder="Title"
        maxLength={50}
        onChange={() => updateItem}
      >
      </textarea>
    </span>
  )
}