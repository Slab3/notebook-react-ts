import React, {useState} from 'react';
import styles from './NoteWrapper.module.scss';
import '../../../styles/main.scss';
import {DeleteBtn, NoteTitle, BodyNoteText, AddTextareaBtn, DateField, BtnAddNote} from '../../index';
import {randomUniqueString} from "../../../util";


export default function NoteWrapper() {
  console.log("notewrapper... clicked... added... fdh ");

  // functional for "create new note item" === \/
  type Item = {
    id: string;
    name: string;
    description: string;
  };
  let [items, setItem] = useState<Item[]>([]);

  function createItem(item: Item) {
    item.id = randomUniqueString('id-');

    setItem([...items, item]);
  }
  // functional for "create new note item" === /\

  return (
      <div className={styles.noteItem}>
        <DeleteBtn/>
        <NoteTitle/>
        <BodyNoteText/>
        {items.map((args: any) => (
            <BodyNoteText key={args.id} {...args} />
        ))}
        <AddTextareaBtn createItem={createItem}/>
        <DateField/>
      </div>
  )
}
