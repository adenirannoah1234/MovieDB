import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import './App.css';
import Watch from './pages/watch/Watch';
import Bookmarks from './pages/bookmarks/Bookmarks';
import { useState } from 'react';

function App() {
  const [searchInput, setSearchInput] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watch/:movie_id" element={<Watch />} />
          <Route
            path="/bookmarked"
            element={<Bookmarks setSearchInput={setSearchInput} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
