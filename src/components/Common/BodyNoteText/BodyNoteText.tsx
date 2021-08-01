import React from 'react';
import styles from "./BodyNoteText.module.scss";
import TextareaAutosize from 'react-textarea-autosize';

interface IBodyNoteText {
  description: string;
  onChange: (description: string) => void;
  id: string
  status: boolean
  onToggle(id: string): void
}

export default function BodyNoteText({ description, onChange, id, status, onToggle }: IBodyNoteText) {

  const classes = ["checkbox-N-Text"];
  if (status) {
    classes.push("completed")
  }

  return (
    <div className={"body"}>
      <div className={classes.join(" ")}>
        <input
          type="checkbox"
          checked={status}
          onChange={() => onToggle(id)}
        />

        <TextareaAutosize
          value={description}
          className={styles.listItemInput}
          placeholder="Add note"
          maxLength={2000}
          onChange={(e) => {
            onChange(e.target.value);
          }}
          maxRows={80}
        >
          </TextareaAutosize>
      </div>
    </div>
  )
}
