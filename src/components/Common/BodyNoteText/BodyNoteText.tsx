import React from 'react';
import { CheckboxNTextWrapper } from '../../index';
// import styles from './BodyNoteText.module.scss'

interface BodyNoteText {
  onChange: () => void;
}

export default function BodyNoteText({ onChange }: BodyNoteText) {
  return (
      <div className="body">
        <CheckboxNTextWrapper/>
      </div>
  )
}