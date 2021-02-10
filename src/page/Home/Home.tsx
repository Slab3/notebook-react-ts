/*в компонентах в коммон элементе, находится сам компонент index.tsx, и index.module.scss,
в модульных элементах, только стили к этому элементу.*/

import React from 'react';
import '../../styles/main.scss';
// norm imports
import { BtnAddItem , DeleteBtn, Search, NoteWrapper } from '../../components/index';

function App() {
  return (
      <>
        <header className="header">
          <h2>Notebook</h2>
        </header>

        <section className="container main-section">
          <Search/>

          <div className="notes" id="notes">
            <NoteWrapper/>
            <NoteWrapper/>
            <NoteWrapper/>
            <NoteWrapper/>
            <NoteWrapper/>
            {/*there will creates note items*/}
            <BtnAddItem/>

          </div>
        </section>
      </>
  );
}

export default App;