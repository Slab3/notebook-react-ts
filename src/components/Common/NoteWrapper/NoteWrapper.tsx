import React from 'react';
import styles from './NoteWrapper.module.scss';
import '../../../styles/main.scss';
import DeleteBtn from '../DeleteBtn/DeleteBtn';


export default function NoteWrapper() {
  return (
      <div className={styles.noteItem}>
        <DeleteBtn/>
        {/*end--*/}

        <span className="title">
          <textarea className="title-input" placeholder="Title" maxLength={50}>
          </textarea>
        </span>

        <div className="body">
          <div className="note-list-item checkbox-block">
            <input type="checkbox"/>
              <textarea className="list-item-input" placeholder="Add note" maxLength={2000}>
              </textarea>
          </div>
        </div>
        <div className="block-add-textarea">
          <button className="add-textarea">+</button>
        </div>
        <div className="add-date-block">
          <span className="date-field">
            10.02.2021, 15:27:40
          </span>
        </div>
      </div>
  )
}
