import React, {useState} from 'react';
import styles from './NoteWrapper.module.scss';
import '../../../styles/main.scss';
import {DeleteBtn, NoteTitle, BodyNoteText, AddTextareaBtn, DateField} from '../../index';
import {randomUniqueString} from "../../../util";


export default function NoteWrapper() {
  console.log("notewrapper... clicked... added... fdh ");

  // functional for "create new note ITEM" === \/
  type Item = {
    id: string;
    name: string;
    description: string;
  };
  let [items, setItem] = useState<Item[]>([]);

  function createItem(item: Item) {
    item.id = randomUniqueString('noteItemId-');

    setItem([...items, item]);
  }
  // functional for "create new note ITEM" === /\

  // functional for DELETE ITEM \/
  // const handleRemoveNote = (e: any) => {
  //   const name = e.target.getAttribute("key");
  //   setItem(items.filter(items => items.name !== name));
  // };
  // functional for DELETE ITEM /\

  return (
      <div className={styles.noteItem}>
        <DeleteBtn/>
        {/*<DeleteBtn handleRemoveNote={handleRemoveNote}/>*/}
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
