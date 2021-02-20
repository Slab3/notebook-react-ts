import React, {useContext, useState} from 'react';
import styles from './NoteWrapper.module.scss';
import '../../../styles/main.scss';
import {DeleteBtn, NoteTitle, BodyNoteText, AddTextareaBtn, DateField} from '../../index';
import {randomUniqueString} from "../../../util";
import {Item, ItemInNode} from '../../../types/item';
import {Notes, useDeleteNote, useUpdateNote} from "../../../context/notes";


export default function NoteWrapper(node: Item) {
  console.log("- notewrapper... clicked... added... fd ");

  const updateNote = useUpdateNote();
  const deleteNote = useDeleteNote();
  const createItem = () => {
    updateNote(node.id, {
      items: [
        ...node.items,
        {
          id: randomUniqueString('descId-'),
          status: true,
          description: ''
        }
      ]
    } as Item)
  };

  return (
      <div className={styles.noteItem}>
        <DeleteBtn
          onClick={() => deleteNote(node.id)}
        />
        <NoteTitle
          title={node.title}
          onChange={(title: string) => updateNote(node.id, {
            title
          } as Item)}
        />
        {node.items.map(({ id, description }) => (
          <BodyNoteText
            key={id}
            description={description}
            onChange={(description: string) => {
              const newItems = [...node.items] as ItemInNode[];
              const item = newItems.find((item: ItemInNode) => item.id === id);

              if (item) {
                Object.assign(item, {
                  description
                });
              }

              updateNote(node.id, {
                items: newItems
              } as Item)
            }}
          />
        ))}
        <AddTextareaBtn createItem={createItem}/>
        <DateField/>
      </div>
  )
}
