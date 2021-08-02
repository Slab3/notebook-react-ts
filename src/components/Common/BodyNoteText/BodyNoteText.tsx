import React, {useState} from 'react';
import styles from "./BodyNoteText.module.scss";
import TextareaAutosize from 'react-textarea-autosize';

interface IBodyNoteText {
  description: string;
  onChange: (description: string) => void;
  id: string
  status: boolean
  onToggle(id: string): void
  removeDesc(event: React.KeyboardEvent, id: string): void
}

export default function BodyNoteText({ description, onChange, id, status, onToggle, removeDesc }: IBodyNoteText) {

  // if description length before keyDown was !== 0, don't delete item. if === 0 - delete.
  const [lengthDesc, setLengthDesc] = useState<number>(description.length);

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (lengthDesc === 0 && event.key === "Backspace") {
      removeDesc(event, id)
    }
  };

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
          onKeyDown={keyPressHandler}
          onKeyUp={()=>setLengthDesc(description.length)}
          maxRows={80}
        />
      </div>
    </div>
  )
}
