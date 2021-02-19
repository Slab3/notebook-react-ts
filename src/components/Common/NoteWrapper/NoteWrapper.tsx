import React, {useContext, useState} from 'react';
import styles from './NoteWrapper.module.scss';
import '../../../styles/main.scss';
import {DeleteBtn, NoteTitle, BodyNoteText, AddTextareaBtn, DateField} from '../../index';
import {randomUniqueString} from "../../../util";
import { Item } from '../../../types/item';
import {Notes, useDeleteNote, useUpdateNote} from "../../../context/notes";


export default function NoteWrapper({ item }: Item) {
  console.log("- notewrapper... clicked... added... fdh ");

  const updateNote = useUpdateNote();
  const deleteNote = useDeleteNote();
  const { notes } = useContext(Notes); // using context


  // functional for "create new note ITEM" === \/
  let [items, setItem] = useState<Item[]>([]);
  function createItem(item: Item) {
    item.id = randomUniqueString('noteItemId-');
    setItem([...items, item]);
  }
  // functional for "create new note ITEM" === /\


  return (
      <div className={styles.noteItem}>
        <DeleteBtn
          onClick={(note: Item) => deleteNote(item.id, { //????
            ...item,
            note
          })}
        />
        <NoteTitle
          onChange={(title: Item) => updateNote(item.id, { // ()=>
            ...item,
            title
          })}
        />
        <BodyNoteText
          onChange={(description: Item) => updateNote(item.id, { // ()=>
            ...item,
            description
          })}
        />
        {items.map((args: any) => (
          <BodyNoteText key={args.id} {...args} />
        ))}
        <AddTextareaBtn createItem={createItem}/>
        <DateField/>
      </div>
  )
}
