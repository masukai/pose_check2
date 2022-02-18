import React from 'react';
import Logos from './components/Logos';
import Navbar from './components/Navbar';
import Movie from './components/Movie';
import Intro from './components/Intro';
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
        <section>
          <Intro />
        </section>
      </div>
      <div id='copyright' align='center'>
        <br />
        <small>&copy; 2022 KAITO MASUDA. All Rights Reserved.</small>
        <br />　
      </div>
    </>
  );
}

export default App;
