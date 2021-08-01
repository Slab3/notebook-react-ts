import React from 'react';
import styles from './NoteWrapper.module.scss';
import '../../../styles/main.scss';
import {DeleteBtn, NoteTitle, BodyNoteText, AddTextareaBtn, DateField} from '../../index';
import {randomUniqueString} from "../../../util";
import {Item, ItemInNote} from '../../../types/item';
import {useDeleteNote, useUpdateNote} from "../../../context/notes";


export default function NoteWrapper(note: Item) {
  console.log("- notewrapper... clicked... added... fd ");

  const updateNote = useUpdateNote();
  const deleteNote = useDeleteNote();
  const createItem = () => {
    updateNote(note.id, {
      items: [
        ...note.items,
        {
          id: randomUniqueString('descId-'),
          status: true,
          description: ''
        }
      ]
    } as Item)
  };

  return (
      <div className={styles.noteItem} style={{backgroundColor: note.color}}>
        <DeleteBtn
          onClick={() => deleteNote(note.id)}
        />
        <NoteTitle
          title={note.title}
          onChange={(title: string) => updateNote(note.id, {
            title
          } as Item)}
        />
        {note.items.map(({ id, description }) => (
          <BodyNoteText
            key={id}
            description={description}
            onChange={(description: string) => {
              const newItems = [...note.items] as ItemInNote[];
              const item = newItems.find((item: ItemInNote) => item.id === id);

              if (item) {
                Object.assign(item, {
                  description
                });
              }

              updateNote(note.id, {
                items: newItems
              } as Item)
            }}
          />
        ))}
        <AddTextareaBtn createItem={createItem}/>
        <DateField time={note.time}/>
      </div>
  )
}
