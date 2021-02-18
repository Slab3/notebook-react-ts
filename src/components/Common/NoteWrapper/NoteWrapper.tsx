import React, {useContext, useState} from 'react';
import styles from './NoteWrapper.module.scss';
import '../../../styles/main.scss';
import {DeleteBtn, NoteTitle, BodyNoteText, AddTextareaBtn, DateField} from '../../index';
import {randomUniqueString} from "../../../util";
import {NoteContext} from "../../../NoteContext";

interface NoteWrapper {
  item: any;
}

export default function NoteWrapper({ item }: NoteWrapper) {
  console.log("notewrapper... clicked... added... fdh ");

  const { list, addItem, deleteItem, updateItem } = useContext(NoteContext);

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
  const handleRemoveNote = (e: any) => {
    const name = e.target.getAttribute("key");
    setItem(items.filter(items => items.name !== name));
    //  here must be "notes", not "items"
  };
  // functional for DELETE ITEM /\

  return (
      <div className={styles.noteItem}>
        {/*<DeleteBtn/>*/}
        <DeleteBtn onClick={() => deleteItem(item.id)}/> {/*note.id*/}
        <NoteTitle
            // onChange={(title: string) => updateItem(item.id, {
            //   ...item,
            //   title
            // })}
        />
        <BodyNoteText
            // onChange={(text: string) => updateItem(item.id, {
            //   ...item,
            //   text
            // })}
        />
        {items.map((args: any) => (
            <BodyNoteText key={args.id} {...args} />
        ))}
        <AddTextareaBtn createItem={createItem}/>
        <DateField/>
      </div>
  )
}
