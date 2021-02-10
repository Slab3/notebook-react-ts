/*в компонентах в коммон элементе, находится сам компонент index.tsx, и index.module.scss,
в модульных элементах, только стили к этому элементу.*/

import React from 'react';
import '../../styles/main.scss';
import Test from '../../components/Test';
// norm imports
import Search from '../../components/Common/InputSearch/InputSearch';
import NewItemBtn from '../../components/Common/NewItemBtn/NewItemBtn';

function App() {
  return (
      <>
        <header className="header">
          <h2>Notebook</h2>
        </header>

        <section className="container main-section">
          <Search/>

          <div className="notes" id="notes">

            <NewItemBtn/>
          </div>
        </section>



        {/*tests*/}
        <div className="App">
          <Test />
        </div>
      </>
  );
}

export default App;