import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import {BrowserRouter} from 'react-router-dom';

import MainInfo from './Pages/MainInfo';
// import Main from './Pages/Main';
import Community from './Pages/Community';
import MyPage from './Pages/MyPage';
import Navbar from './Navbar';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <Navbar/>
          <section className="navbar">
            <Routes>
              {/* <Route path="/" element={<Main/>}/> */}
              <Route path="/mainInfo" element={<MainInfo/>}/>
              <Route path="/community" element={<Community/>}/>
              <Route path="/mypage" element={<MyPage/>}/>
            </Routes>
          </section>
        </main>
      </div>
      {/* <div>
        <p> HEllo</p>
      </div> */}
    </BrowserRouter>
  );
}

export default App;
