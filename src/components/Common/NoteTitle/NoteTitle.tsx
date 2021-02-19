import React from "react";
import styles from "./NoteTitle.module.scss";

interface INoteTitle {
  title: string;
  onChange: (title: string) => void;
}

export default function NoteTitle({ title, onChange }: INoteTitle) {
  return (
    <span className={styles.title}>
      <textarea
        className={styles.titleInput}
        placeholder="Title"
        maxLength={50}
        onChange={() => {
          onChange(title);
        }}
        value={title}
      >
      </textarea>
    </span>
  )
}