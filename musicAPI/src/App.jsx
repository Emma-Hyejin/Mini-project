import Main from './Pages/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/main" element={<Main/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
