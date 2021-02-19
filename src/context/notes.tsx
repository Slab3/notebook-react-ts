import React, {createContext, useContext, useEffect, useState} from 'react';
import {Item, ItemInNode} from "../types/item";
import {randomUniqueString} from "../util";

export const Notes = createContext({
  notes: [] as Item[],
  setNotes: (notes: Item[]) => {}
});

export function useCreateNote() {
  const { notes, setNotes } = useContext(Notes);

  return (title: string, description: string): void => {
    setNotes([...notes, {
      id: randomUniqueString('noteId-'),
      title,
      description,
      time: Date().toLocaleString(),
      items: [] as ItemInNode[]
    }]);
  };
}

export function useUpdateNote() {
  const { notes, setNotes } = useContext(Notes);

  return (id: string, newNote: Item): void => { // id was with type :string
    const newNotes = [...notes];
    const oldNote = newNotes.find(({ id: idNote }) => idNote === id);

    if (oldNote) {
      Object.assign(oldNote, newNote);
    }
    setNotes(newNotes);
  }
}

export function useDeleteNote() {
  const { notes, setNotes } = useContext(Notes);

  return (id: string): void => { //  return (id: string, note: Item) => {
    setNotes([...notes.filter(({ id: idNote }) => idNote !== id )]);
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