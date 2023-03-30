import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import {BrowserRouter} from 'react-router-dom';

import Aboutus from './Pages/Aboutus';
// import Main from './Pages/Main';
import Community from './Pages/Community';
import Journey from './Pages/Journey';
import Navbar from './Navbar';
import Main from './Main';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <Navbar/> {/*App.css*/}
          {/* <Main/> */}
          <section className="navbar_app">
            <Routes>
              <Route path="/" element={<Main/>}/>
              <Route path="/aboutus" element={<Aboutus/>}/>
              <Route path="/journey" element={<Journey/>}/>
              <Route path="/community" element={<Community/>}/>
            </Routes>
          </section>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
