import React from 'react';
import NotesProvider  from "../../context/notes";
import Content from "../../components/Common/Content";

import '../../styles/main.scss';
import Tooltip from "../../components/Common/Tooltip/Tooltip";

function App() {

  return (
      <>
        <header className="header">
          <h2>Notebook</h2>
        </header>
        <Tooltip />

        <section className="container main-section">
          <NotesProvider>
            <Content /> {/*all notes and button*/}
          </NotesProvider>
        </section>
      </>
  );
}

export default App;
