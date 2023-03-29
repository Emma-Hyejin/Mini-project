import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Main from './Main';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <main>
      <section className="main">
        <Navbar/>
        <Routes>
            <Route path="/" element={Main}/>
        </Routes>
      </section>
      <Main/>
      </main>
    </div>
  );
}

export default App;
