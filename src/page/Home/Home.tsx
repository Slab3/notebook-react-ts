/*в компонентах в коммон элементе, находится сам компонент index.tsx, и index.module.scss,
в модульных элементах, только стили к этому элементу.*/

import React, { useState } from 'react';
import '../../styles/main.scss';
import { BtnAddNote , Search, NoteWrapper } from '../../components/index';

function App() {
  //  Вызов useState возвращает две вещи: текущее значение состояния и функцию для его обновления.
  const [notes, addNote] = useState([]);

  return (
      <>
        <header className="header">
          <h2>Notebook</h2>
        </header>
        <section className="container main-section">
          <Search/>
          <div className="notes" id="notes">
            {/*test items*/}
            <NoteWrapper/>
            <NoteWrapper/>
            <NoteWrapper/>
            <NoteWrapper/>
            {/*there will creates note items*/}
            <BtnAddNote/>
            <NoteWrapper/>
            <NoteWrapper/>
            <NoteWrapper/>
            {Example()}
          </div>
        </section>
      </>
  );
}

function Example() {
  // Объявляем новую переменную состояния "count"
  const [count, setCount] = useState(0);

  return (
      <div>
        <p>Вы нажали {count} раз</p>
        <button onClick={() => setCount(count + 1)}>
          Нажми на меня
        </button>
      </div>
  );
}


export default App;