import React from 'react';
import Logos from './components/Logos';
import Navbar from './components/Navbar';
import Movie from './components/Movie';
import './App.css';

function App() {
  return (
    <>
      <div className='App'>
        <section>
          <Logos />
        </section>
        <section>
          <Navbar />
        </section>
        <section>
          <Movie />
        </section>
      </div>
      <div id='copyright' align='center'>
        <small>&copy; 2022 KAITO MASUDA. All Rights Reserved.</small>
      </div>
    </>
  );
}

export default App;
