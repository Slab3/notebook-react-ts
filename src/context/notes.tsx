import React, {createContext, useContext, useState} from 'react';
import {Item, ItemInNote} from "../types/item";
import {generateColor, randomUniqueString} from "../util";

export const Notes = createContext({
  notes: [] as Item[],
  setNotes: (notes: Item[]) => {}
});

export function useCreateNote() {
  const { notes, setNotes } = useContext(Notes);

  localStorage.setItem("notes", JSON.stringify(notes));

  return (title: string, description: string): void => {
    setNotes([...notes, {
      id: randomUniqueString('noteId-'),
      title,
      description,
      time: new Date().toLocaleString(),
      color: generateColor(),
      items: [] as ItemInNote[]
    }]);
  };
}

export function useUpdateNote() {
  const { notes, setNotes } = useContext(Notes);

  return (id: string, newNote: Item): void => {
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

  return (id: string): void => {
    setNotes([...notes.filter(({ id: idNote }) => idNote !== id )]);
  }
}



interface ContextProvider {
  children: React.ReactNode;
}

export default function NotesProvider({ children }: ContextProvider): JSX.Element {
  // added storage
  const [notes, setNotes] = useState<Item[]>(JSON.parse(localStorage.getItem("notes")as string) || []);

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
