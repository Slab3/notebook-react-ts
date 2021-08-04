import React from 'react';
import styles from './Tooltip.module.scss';

export default function Tooltip () {
  return (
    <div className={styles.tooltip}>?
      <ul>
        <span className={styles.tooltiptext}>
          <ul>
            Usage hints:
            <hr/>
            <li>To delete a note description item, press the "backspace" key. If item empty - it will be removed.</li>
            <li>
              To upload a text file and write it into the description of the note, you need to drag and drop the file
              inside the block that is highlighted with a white border, or click on this block, and select the text
              file.
            </li>
          </ul>
        </span>
      </ul>
    </div>
  )
}
