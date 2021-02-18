import React, {useContext, useState} from 'react';
import styles from './NoteWrapper.module.scss';
import '../../../styles/main.scss';
import {DeleteBtn, NoteTitle, BodyNoteText, AddTextareaBtn, DateField} from '../../index';
import {randomUniqueString} from "../../../util";
import {NoteContext} from "../../../NoteContext";
import { Item } from '../../../types/item';


export default function NoteWrapper({ item }: Item) {
  console.log("notewrapper... clicked... added... fdh ");

  const { notes, addItem, deleteItem, updateItem } = useContext(NoteContext);

  // functional for "create new note ITEM" === \/
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
  //   //  here must be "notes", not "items"
  // };
  // functional for DELETE ITEM /\


  return (
      <div className={styles.noteItem}>
        {/*<DeleteBtn/>*/}
        <DeleteBtn onClick={() => deleteItem(item.id)}/> {/*note.id*/}
        <NoteTitle
          onChange={()=>(title: Item) => updateItem(item.id, {
            ...item,
            title
          })}
        />
        <BodyNoteText
          onChange={(description: Item) => updateItem(item.id, {
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
