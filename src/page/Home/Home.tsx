import React, { useState } from 'react';
import '../../styles/main.scss';
import { BtnAddNote , Search, NoteWrapper } from '../../components/index';
import { randomUniqueString } from "../../util";
import { NoteContext } from "../../NoteContext";

function App() {
  // functional for "create new NOTE" === \/
  type Note = {
    id: string;
    title: string;
    description: string;
  };
  let [notes, setNote] = useState<Note[]>([]);

  function createNote(note: Note) {
    note.id = randomUniqueString('noteId-');

    setNote([...notes, note]);
  }
  // functional for "create new NOTE" === /\


  //testing context
  const [value, setValue] = useState("hello from context");
  //testing end



  return (
      <>
        <header className="header">
          <h2>Notebook</h2>
        </header>
        <section className="container main-section">
          <Search/>
          <NoteContext.Provider value={{value, setValue}}> {/*providing context*/} {/*here must be: notes, setNote*/}
            <div className="notes" id="notes">
              {notes.map((args: any) => (
                  <NoteWrapper key={args.id} {...args} />
                ))}
              <BtnAddNote createNote={createNote} />
            </div>
          </NoteContext.Provider>
        </section>
      </>
  );
}


export default App;