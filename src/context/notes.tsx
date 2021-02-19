import React, {createContext, useContext, useEffect, useState} from 'react';
import {Item} from "../types/item";
import {randomUniqueString} from "../util";

export const Notes = createContext({
  notes: [] as Item[],
  setNotes: (notes: Item[]) => {}
});

export function useCreateNote() {
  const { notes, setNotes } = useContext(Notes);

  return (note: Item) => {
    console.log( 1 );
    note.id = randomUniqueString('noteId-');

    setNotes([...notes, note]);
  };
}

export function useUpdateNote() {
  const { notes, setNotes } = useContext(Notes);

  return (id: Item, note: Item) => { // id was with type :string
    const newNotes = [...notes];

    Object.assign(newNotes.find(({ id: idNote }) => idNote === id), note);
    setNotes(newNotes);
  }
}

export function useDeleteNote() {
  const { notes, setNotes } = useContext(Notes);

  return (id: Item, note: Item) => { //  return (id: string, note: Item) => {
    setNotes([...notes.filter(({ id: idNote }) => idNote !== id )]);
    console.log("test delete note")
  }
}

interface ContextProvider {
  children: React.ReactNode;
}

export default function NotesProvider({ children }: ContextProvider): JSX.Element {
  const [notes, setNotes] = useState<Item[]>([]);

  return (
    <Notes.Provider
      value={{
        notes,
        setNotes,
      }}
    >
      {children}
    </Notes.Provider>
  );
}