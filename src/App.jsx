import { useState } from 'react';
import "./App.css";
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import Recommended from './components/recommended/Recommended';
import Search from './components/search/Search';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  function onSearchChange(_searchTerm) {
    // searchTerm = _searchTerm
    setSearchTerm(_searchTerm);
  }

  return (
    // React fragment -> Can also be used as React.Fragment
    <>
      <Navbar></Navbar>
      <Search onSearchChange={onSearchChange} />
      <section >
        <Carousel />
        <Recommended searchTerm={searchTerm} />
      </section>
    </>
  );
}

export default App;
