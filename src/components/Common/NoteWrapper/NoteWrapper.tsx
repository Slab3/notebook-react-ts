import React, { useState} from 'react';
import styles from './NoteWrapper.module.scss';
import '../../../styles/main.scss';
import {DeleteBtn, NoteTitle, BodyNoteText, AddTextareaBtn, DateField, Modal, InputUpload} from '../../index';
import {randomUniqueString} from "../../../util";
import {Item, ItemInNote} from '../../../types/item';
import {useDeleteNote, useUpdateNote} from "../../../context/notes";


export default function NoteWrapper(note: Item) {
  // console.log("- NoteWrapper render ");

  const [modalActive, setModalActive] = useState<boolean>(false);

  // test drag and drop upload
  const [drag, setDrag] = useState<boolean>(false);
  // test drag and drop upload

  const updateNote = useUpdateNote();
  const deleteNote = useDeleteNote();

  const createItem = () => {
    updateNote(note.id, {
      items: [
        ...note.items,
        {
          id: randomUniqueString('descId-'),
          status: false,
          description: ''
        }
      ]
    } as Item)
  };

  const toggleItem = (id: string) => {
    // console.log("toggle item render!")

    let newItems =
      note.items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            status: !item.status
          }
        }
        return item
      });

    updateNote(note.id, {
      items: newItems
    } as Item)
  };

  // when any item in note changes - updating "time"
  const updateTime = ()=> {
    updateNote(note.id, {
      time: new Date().toLocaleString()
    } as Item)
  };

  // delete description item from "note.items[]"
  const removeDescription = (event: React.KeyboardEvent, id: string) => {
    let newItems = note.items.filter((item)=> item.id !== id);

    updateNote(note.id, {
      items: newItems
    } as Item)
  };

  // on upload create new note with text which was in file
  const onUpload = (text: string) => {
    updateNote(note.id, {
      items: [
        ...note.items,
        {
          id: randomUniqueString('descId-'),
          status: false,
          description: text
        }
      ]
    } as Item)
  };

  return (
      <div className={styles.noteItem} style={{backgroundColor: note.color}} onChange={updateTime}>
        {/*{(()=> console.log('render div note wrapper'))()}*/}
        <Modal
          isActive={modalActive}
          setActive={setModalActive}
          functionEvent={deleteNote}
          id={note.id}
        />
        <DeleteBtn
          onClick={() => setModalActive(true)}
        />
        <NoteTitle
          title={note.title}
          onChange={(title: string) => updateNote(note.id, {
            title
          } as Item)}
        />
        {note.items.map(({ id, description, status }) => (
          <BodyNoteText
            key={id}
            description={description}
            id={id}
            status={status}
            removeDesc={removeDescription}
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
              // console.log('update in func body note text')
            }}
            onToggle={(id: string) => toggleItem(id)}
          />
        ))}
        <AddTextareaBtn createItem={createItem}/>
        <InputUpload drag={drag} setDrag={setDrag} onUpload={onUpload}/>
        <DateField time={note.time}/>
      </div>
  )
}
