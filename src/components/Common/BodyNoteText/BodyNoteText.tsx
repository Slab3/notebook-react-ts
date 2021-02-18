import React from 'react';
import { ItemCheckbox, ItemText } from '../../index';
// import styles from './BodyNoteText.module.scss'

interface BodyNoteText {
  onChange: () => void;
}

export default function BodyNoteText({ onChange }: BodyNoteText) {
  return (
      <div className="body">
        <div className="checkbox-N-Text">
          <ItemCheckbox/>
          <ItemText/>
        </div>
      </div>
  )
}