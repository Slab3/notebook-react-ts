/*в компонентах в коммон элементе, находится сам компонент index.tsx, и index.module.scss,
в модульных элементах, только стили к этому элементу.*/

import React, {ReactNode, useState} from 'react';
import '../../styles/main.scss';
import { BtnAddNote , Search, NoteWrapper } from '../../components/index';
// import {object} from "prop-types";

function App() {
  //  Вызов useState возвращает две вещи: текущее значение состояния и функцию для его обновления.
  // interface INotes {
  //   notes: [];
  //   createNote: ReactNode;
  // }
  // https://codepen.io/gaearon/pen/ZXeOGM?editors=0010
  // keys ;

  let [notes, setNote] = useState([] as any);

  function createNote(item: object) {
    setNote([...notes, item]);
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
                <NoteWrapper key={args} {...args} />
                // <NoteWrapper key={args.text} {...args} />
              ))}
            <BtnAddNote createNote={createNote} />
          </div>
        </section>
      </>
  );
}


export default App;