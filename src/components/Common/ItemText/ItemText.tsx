import React, {useContext} from "react";
import styles from "./ItemText.module.scss";
import {NoteContext} from "../../../NoteContext";
import {Item} from "../../../types/item";


export default function ItemText({ item }: Item) {
  const { updateItem } = useContext(NoteContext);

  return (
      <textarea
        className={styles.listItemInput}
        placeholder="Add note"
        maxLength={2000}
        onChange={() => updateItem}
      >
      </textarea>
  )
}