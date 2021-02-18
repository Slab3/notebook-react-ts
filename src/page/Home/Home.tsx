import React, {useContext, useState} from 'react';
import '../../styles/main.scss';
import { BtnAddNote , Search, NoteWrapper } from '../../components/index';
import NotesProvider, { Notes } from "../../context/notes";

function App() {
  const { notes } = useContext(Notes);

  return (
      <>
        <header className="header">
          <h2>Notebook</h2>
        </header>
        <section className="container main-section">
          <Search/>
          <NotesProvider>
            <div className="notes" id="notes">
              {notes.map((args: any) => (
                  <NoteWrapper key={args.id} {...args} />
                ))}
              <BtnAddNote />
            </div>
          </NotesProvider>
        </section>
      </>
  );
}


export default App;