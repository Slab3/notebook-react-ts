import React, {useState} from 'react';
import { Search } from '../../components/index';
import NotesProvider  from "../../context/notes";
import Content from "../../components/Common/Content";

import '../../styles/main.scss';

function App() {

  return (
      <>
        <header className="header">
          <h2>Notebook</h2>
        </header>
        <section className="container main-section">
          <NotesProvider>
            <Content /> {/*all notes and button*/}
          </NotesProvider>
        </section>
      </>
  );
}

export default App;
