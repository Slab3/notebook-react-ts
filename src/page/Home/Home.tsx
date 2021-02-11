/*в компонентах в коммон элементе, находится сам компонент index.tsx, и index.module.scss,
в модульных элементах, только стили к этому элементу.*/

import React from 'react';
import '../../styles/main.scss';
import { BtnAddNote , Search, NoteWrapper } from '../../components/index';

function App() {
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
            <NoteWrapper/>
            {/*there will creates note items*/}
            <BtnAddNote/>
          </div>
        </section>
      </>
  );
}

export default App;