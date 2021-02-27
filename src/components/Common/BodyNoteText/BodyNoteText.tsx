import React from 'react';
import styles from "./BodyNoteText.module.scss";

interface IBodyNoteText {
  description: string;
  onChange: (description: string) => void;
}

export default function BodyNoteText({ description, onChange }: IBodyNoteText) {
  return (
    <div className="body">
      <div className="checkbox-N-Text">
        <input type="checkbox" />
        {/*try map here*/}
        <textarea
          value={description}
          className={styles.listItemInput}
          placeholder="Add note"
          maxLength={2000}
          onChange={(e) => {
            onChange(e.target.value);
          }}
        >
          </textarea>
      </div>
    </div>
  )
}