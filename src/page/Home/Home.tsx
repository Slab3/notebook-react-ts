/*в компонентах в коммон элементе, находится сам компонент index.tsx, и index.module.scss,
в модульных элементах, только стили к этому элементу.*/

import React, {ReactNode, useState} from 'react';
import '../../styles/main.scss';
import { BtnAddNote , Search, NoteWrapper } from '../../components/index';
import { randomUniqueString } from "../../util";

function App() {

  type Note = {
    id: string;
    title: string;
    description: string;

  };

  let [notes, setNote] = useState<Note[]>([]);

  function createNote(note: Note) {
    note.id = randomUniqueString('id-');

    setNote([...notes, note]);
  }

  return (
      <>
        <header className="header">
          <h2>Notebook</h2>
        </header>
        <section className="container main-section">
          <Search/>
          <div className="notes" id="notes">
            {notes.map((args: any) => (
                <NoteWrapper key={args.id} {...args} />
              ))}
            <BtnAddNote createNote={createNote} />
          </div>
        </section>
      </>
  );
}


export default App;