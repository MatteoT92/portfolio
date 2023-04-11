import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Navbar from './components/Navbar';

function App() {

    const [language, setLanguage] = useState('ITA');

    return (
      <BrowserRouter>
        <Navbar language={language} funcLangIta={() => setLanguage(prevValue => 'ITA')} funcLangEng={() => setLanguage(prevValue => 'ENG')} />
        <Routes>
          <Route path="/" element={<Home language={language} />} />
          <Route path="/about" element={<About language={language} />} />
          <Route path="/contacts" element={<Contacts language={language} />} />
        </Routes>
      </BrowserRouter>  
    )
  
}

export default App;