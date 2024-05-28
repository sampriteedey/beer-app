// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';
import SearchBar from './component/SearchBar/SearchBar';
import BeerCard from './component/BeerCard/BeerCard';

function App() {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('https://api.sampleapis.com/beers/ale')
      .then(response => {
        setBeers(response.data);
      })
      .catch(error => {
        console.error('Error fetching the beers data', error);
      });
  }, []);

  const filteredBeers = beers.filter(beer =>
    beer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Beer List</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <div className="beer-list">
        {filteredBeers.map(beer => (
          <BeerCard key={beer.id} beer={beer} />
        ))}
      </div>
    </div>
  );
}

export default App;
